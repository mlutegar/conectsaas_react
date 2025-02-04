import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthorContainer, BannerContainer, NewsList, AuthorInfo } from "./Style";
import CardPrimario from "../cards/CardPrimario/CardPrimario";
import CardSecundario from "../cards/CardSecundario/CardSecundario";
import WordPressApi from "../../services/wordpressApi";

const AuthorPage = () => {
    const { slug } = useParams(); // Obtém o slug do autor pela URL
    const [author, setAuthor] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAuthorData = async () => {
            try {
                // Buscar autor pelo slug
                const authorData = await WordPressApi.getUserBySlug(slug);
                if (authorData) {
                    setAuthor(authorData);

                    // Buscar posts desse autor
                    let postsData = await WordPressApi.getPosts({ author: authorData.id, per_page: 10 });
                    postsData = await WordPressApi.getPostsWithMedia(postsData);

                    setPosts(postsData);
                }
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar autor:", error);
                setLoading(false);
            }
        };

        fetchAuthorData();
    }, [slug]);

    if (loading) return <p>Carregando...</p>;
    if (!author) return <p>Autor não encontrado.</p>;

    return (
        <AuthorContainer>
            <AuthorInfo>
                <img src={author.avatar_urls?.["96"] || "/fallback-avatar.jpg"} alt={author.name} />
                <h1>{author.name}</h1>
                {author.description && <p>{author.description}</p>}
            </AuthorInfo>

            {/* Banner: Card Primário + 3 Cards Secundários */}
            {posts.length > 0 && (
                <BannerContainer>
                    <CardPrimario post={posts[0]} />
                    <div className="side-posts">
                        {posts.slice(1, 4).map((post) => (
                            <CardSecundario key={post.id} post={post} />
                        ))}
                    </div>
                </BannerContainer>
            )}

            {/* Lista de Notícias do Autor */}
            <NewsList>
                {posts.slice(4).map((post) => (
                    <CardSecundario key={post.id} post={post} />
                ))}
            </NewsList>
        </AuthorContainer>
    );
};

export default AuthorPage;
