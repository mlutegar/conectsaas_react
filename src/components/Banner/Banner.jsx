import { useEffect, useState, useRef, memo } from "react";
import CardPrimario from "../cards/CardPrimario/CardPrimario";
import CardSecundario from "../cards/CardSecundario/CardSecundario";
import { BannerContainer, MainPost, SidePosts } from "./Style";

const Banner = memo(({ categoriaNome = null }) => {
    const [posts, setPosts] = useState([]);
    const [categoriaId, setCategoriaId] = useState(null);
    const isFetched = useRef(false);

    useEffect(() => {
        const fetchCategoriaId = async () => {
            if (!categoriaNome) return; // Se não houver categoria específica, pula essa parte

            try {
                const response = await fetch("https://api.conectasaas.com.br/wp-json/wp/v2/categories");
                const categories = await response.json();

                if (Array.isArray(categories)) {
                    const categoriaEncontrada = categories.find(cat =>
                        cat.name.toLowerCase() === categoriaNome.toLowerCase()
                    );

                    if (categoriaEncontrada) {
                        setCategoriaId(categoriaEncontrada.id);
                        console.log(`✅ Categoria "${categoriaNome}" encontrada. ID: ${categoriaEncontrada.id}`);
                    } else {
                        console.warn(`⚠️ Categoria "${categoriaNome}" não encontrada.`);
                    }
                }
            } catch (error) {
                console.error("❌ Erro ao buscar categorias:", error);
            }
        };

        fetchCategoriaId();
    }, [categoriaNome]);

    useEffect(() => {
        if (isFetched.current) return;
        isFetched.current = true;

        const fetchPosts = async () => {
            try {
                let url = "https://api.conectasaas.com.br/wp-json/wp/v2/posts?per_page=5";

                if (categoriaId) {
                    url = `https://api.conectasaas.com.br/wp-json/wp/v2/posts?categories=${categoriaId}&per_page=5`;
                }

                console.log(`🔍 Buscando posts em: ${url}`);
                const response = await fetch(url);
                const data = await response.json();

                const postsWithImages = await Promise.all(
                    data.map(async (post) => {
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
            } catch (error) {
                console.error("❌ Erro ao buscar posts:", error);
            }
        };

        if (categoriaNome === null || categoriaId) {
            fetchPosts();
        }
    }, [categoriaId, categoriaNome]);

    if (posts.length === 0) return <p>Carregando notícias...</p>;

    return (
        <BannerContainer>
            {/* Post Principal */}
            <MainPost>
                <CardPrimario post={posts[0]} tamanhoMenor={true} />
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
