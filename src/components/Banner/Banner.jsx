import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { BannerContainer, MainPost, SidePosts, PostItem, CategoryTag, PostInfo } from "./Style";

const Banner = () => {
    const [posts, setPosts] = useState([]);
    const isFetched = useRef(false); // Evita múltiplas execuções

    useEffect(() => {
        if (isFetched.current) return;
        isFetched.current = true;

        const fetchPosts = async () => {
            try {
                const response = await fetch("https://api.conectasaas.com.br/wp-json/wp/v2/posts?per_page=4");
                const data = await response.json();

                const postsWithImages = await Promise.all(
                    data.map(async (post) => {
                        if (post.featured_media) {
                            try {
                                const mediaResponse = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/media/${post.featured_media}`);
                                const mediaData = await mediaResponse.json();
                                return { ...post, imageUrl: mediaData.source_url };
                            } catch {
                                return { ...post, imageUrl: "/fallback.jpg" }; // Imagem padrão
                            }
                        }
                        return { ...post, imageUrl: "/fallback.jpg" };
                    })
                );

                setPosts(postsWithImages);
            } catch (error) {
                console.error("Erro ao buscar posts:", error);
            }
        };

        fetchPosts();
    }, []);

    if (posts.length === 0) return <p>Carregando notícias...</p>;

    return (
        <BannerContainer>
            {/* Post Principal */}
            <MainPost>
                <Link to={`/post/${posts[0].slug}`}>
                    <img src={posts[0].imageUrl} alt={posts[0].title.rendered} />
                </Link>
                <CategoryTag>{posts[0].categories[0]?.name || "Categoria"}</CategoryTag>
                <h2 dangerouslySetInnerHTML={{ __html: posts[0].title.rendered }} />
                <PostInfo>📅 {new Date(posts[0].date).toLocaleDateString()} • ⏳ 7 horas atrás</PostInfo>
            </MainPost>

            {/* Posts Secundários */}
            <SidePosts>
                {posts.slice(1).map((post) => (
                    <PostItem key={post.id}>
                        <Link to={`/post/${post.slug}`}>
                            <img src={post.imageUrl} alt={post.title.rendered} />
                        </Link>
                        <CategoryTag>{post.categories[0]?.name || "Categoria"}</CategoryTag>
                        <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        <PostInfo>⏳ 7 horas atrás</PostInfo>
                    </PostItem>
                ))}
            </SidePosts>
        </BannerContainer>
    );
};

export default Banner;
