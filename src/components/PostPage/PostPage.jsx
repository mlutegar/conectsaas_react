import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import {
    PostContainer, PostTitle, PostContent, PostImage, PostInfo, PostWrapper, PostMeta, ShareButton
} from "./Style";
import RelatedNews from "../RelatedNews/RelatedNews";
import MaisNoticias from "../MaisNoticias/MaisNoticias";
import CompartilharNoticia from "../CompartilharNoticia/CompartilharNoticia";
import WordPressApi from "../../services/wordpressApi";
import ButtomCategory from "../cards/ButtomCategory/ButtomCategory";
import Comentarios from "../Comentarios/Comentarios";
import {SvgCalendario, SvgRelogioTopo, SvgShare} from "../Svgs/Svgs";

const PostPage = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                let postData = await WordPressApi.getPostBySlug(slug);
                if (postData) {
                    postData = await WordPressApi.getPostWithMedia(postData);
                    setPost(postData);

                    // 🔹 Buscar informações do autor
                    if (postData.author) {
                        const authorData = await WordPressApi.getUserBySlug(postData.author);
                        setAuthor(authorData);
                    }
                }
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar post:", error);
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) return <p>Carregando...</p>;
    if (!post) return <p>Post não encontrado.</p>;

    const paragraphs = post.content.rendered.split("</p>");

    // 🔹 Calcular tempo estimado de leitura (considerando 200 palavras por minuto)
    const wordCount = post.content.rendered.replace(/<[^>]+>/g, "").split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // Média de leitura: 200 palavras por minuto

    return (
        <>
            <PostWrapper>
                <PostContainer>
                    <ButtomCategory />

                    {/* Título da Notícia */}
                    <PostTitle dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

                    {/* 🔹 Metadados do post (Autor, Data e Tempo de Leitura) */}
                    <PostMeta>
                        <span>Por {author ? author.name : "Autor desconhecido"}</span>
                    </PostMeta>
                    <PostMeta>
                        <span><SvgRelogioTopo/> {new Date(post.date).toLocaleDateString()}</span> |
                        <span><SvgCalendario/> {readingTime} min de leitura</span>
                    </PostMeta>

                    {/* 🔹 Botão de compartilhamento */}
                    <ShareButton onClick={() => navigator.share({ title: post.title.rendered, url: window.location.href })}>
                        <SvgShare/> Compartilhe aqui
                    </ShareButton>

                    {/* Imagem da Notícia */}
                    <PostImage src={post.imageUrl} alt={post.title.rendered} />

                    <PostContent>
                        {paragraphs.map((paragraph, index) => (
                            <div key={index} className={index === 0 ? "primeiro-paragrafo" : ""}>
                                <div dangerouslySetInnerHTML={{ __html: paragraph + "</p>" }} />
                                {index === 3 && paragraphs.length > 4 && <RelatedNews categoryId={post.categories[0]} />}
                            </div>
                        ))}
                    </PostContent>

                    {/* Compartilhar Notícia no final do post também */}
                    <CompartilharNoticia url={window.location.href} title={post.title.rendered} />
                </PostContainer>

                {/* Adiciona a Sidebar ao lado do Post */}
                <Sidebar />
            </PostWrapper>

            {/* 🔹 Seção de Comentários */}
            <Comentarios postId={post.id} />

            {/* 🔹 Seção Mais Notícias */}
            <MaisNoticias categoryId={post.categories[0]} />
        </>
    );
};

export default PostPage;
