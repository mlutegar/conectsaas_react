import {useEffect, useState, useRef, memo} from "react";
import CardPrimario from "../CardPrimario/CardPrimario";
import CardSecundario from "../CardSecundario/CardSecundario";
import { BannerContainer, MainPost, SidePosts } from "./Style";

const Banner = memo(() => {
    const [posts, setPosts] = useState([]);
    const isFetched = useRef(false);

    useEffect(() => {
        if (isFetched.current) return;
        isFetched.current = true;

        const fetchPosts = async () => {
            try {
                const response = await fetch("https://api.conectasaas.com.br/wp-json/wp/v2/posts?per_page=5");
                const data = await response.json();

                const postsWithImages = await Promise.all(
                    data.map(async (post) => {
                        let imageUrl = "/fallback.jpg";
                        if (post.featured_media) {
                            try {
                                const mediaResponse = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/media/${post.featured_media}`);
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
                <CardPrimario post={posts[0]} tamanhoMenor={true} /> {/* Adicionado prop para reduzir o tamanho */}
            </MainPost>

            {/* Posts Secundários - 2 colunas e 2 linhas */}
            <SidePosts>
                {posts.slice(1, 5).map((post) => (
                    <CardSecundario key={post.id} post={post} />
                ))}
            </SidePosts>
        </BannerContainer>
    );
});

export default Banner;
