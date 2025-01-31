import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import CardPrimario from "../CardPrimario/CardPrimario";
import CardSecundario from "../CardSecundario/CardSecundario";
import { BannerContainer, SidePosts } from "./Style";

const Banner = () => {
    const [posts, setPosts] = useState([]);
    const isFetched = useRef(false); // Evita múltiplas execuções

    useEffect(() => {
        if (isFetched.current) return;
        isFetched.current = true;

        const fetchPosts = async () => {
            try {
                const response = await fetch("https://api.conectasaas.com.br/wp-json/wp/v2/posts?per_page=5");
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
            <CardPrimario post={posts[0]} />

            {/* Posts Secundários */}
            <SidePosts>
                {posts.slice(1).map((post) => (
                    <CardSecundario key={post.id} post={post} />
                ))}
            </SidePosts>
        </BannerContainer>
    );
};

export default Banner;
