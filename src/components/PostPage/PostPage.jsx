import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { PostContainer, PostTitle, PostContent, PostImage, PostInfo, PostWrapper } from "./Style";
import RelatedNews from "../RelatedNews/RelatedNews";
import MaisNoticias from "../MaisNoticias/MaisNoticias";
import CompartilharNoticia from "../CompartilharNoticia/CompartilharNoticia";
import WordPressApi from "../../services/wordpressApi";
import ButtomCategory from "../cards/ButtomCategory/ButtomCategory";

const PostPage = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                let postData = await WordPressApi.getPostBySlug(slug);
                if (postData) {
                    postData = await WordPressApi.getPostWithMedia(postData);
                    setPost(postData);
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

    return (
        <>
            <PostWrapper>
                <PostContainer>
                    <ButtomCategory/>
                    <PostTitle dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <PostImage src={post.imageUrl} alt={post.title.rendered} />
                    <PostInfo>📅 {new Date(post.date).toLocaleDateString()}</PostInfo>
                    <PostContent>
                        {paragraphs.map((paragraph, index) => (
                            <div key={index} className={index === 0 ? "primeiro-paragrafo" : ""}>
                                <div dangerouslySetInnerHTML={{ __html: paragraph + "</p>" }} />
                                {index === 3 && paragraphs.length > 4 && <RelatedNews categoryId={post.categories[0]} />}
                            </div>
                        ))}
                    </PostContent>
                    <CompartilharNoticia url={window.location.href} title={post.title.rendered} />
                </PostContainer>

                {/* Adiciona a Sidebar ao lado do Post */}
                <Sidebar />
            </PostWrapper>
            <MaisNoticias categoryId={post.categories[0]} />
        </>
    );
};

export default PostPage;
