import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthorContainer, BannerContainer, NewsList, AuthorInfo } from "./Style";
import CardPrimario from "../../components/CardPrimario/CardPrimario";
import CardSecundario from "../../components/CardSecundario/CardSecundario";

const AuthorPage = () => {
    const { slug } = useParams(); // Obtém o slug do autor pela URL
    const [author, setAuthor] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                // Buscar autor pelo slug
                const response = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/users?slug=${slug}`);
                const data = await response.json();

                if (data.length > 0) {
                    setAuthor(data[0]);

                    // Buscar posts desse autor
                    const postsResponse = await fetch(
                        `https://api.conectasaas.com.br/wp-json/wp/v2/posts?author=${data[0].id}&per_page=10`
                    );
                    const postsData = await postsResponse.json();

                    // Adicionando imagens aos posts
                    const postsWithImages = await Promise.all(
                        postsData.map(async (post) => {
                            let imageUrl = "/fallback.jpg";
                            if (post.featured_media) {
                                try {
                                    const mediaResponse = await fetch(
                                        `https://api.conectasaas.com.br/wp-json/wp/v2/media/${post.featured_media}`
                                    );
                                    const mediaData = await mediaResponse.json();
                                    imageUrl = mediaData.source_url;
                                } catch {
                                    console.error("Erro ao carregar imagem do post.");
                                }
                            }
                            return { ...post, imageUrl };
                        })
                    );

                    setPosts(postsWithImages);
                }
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar autor:", error);
                setLoading(false);
            }
        };

        fetchAuthor();
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