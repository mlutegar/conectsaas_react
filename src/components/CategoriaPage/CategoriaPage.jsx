import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryContainer, NewsList } from "./Style";
import CardSecundario from "../cards/CardSecundario/CardSecundario";
import Banner from "../Banner/Banner";

const CategoryPage = () => {
    const { slug } = useParams(); // Obtém o slug da categoria pela URL
    const [category, setCategory] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                console.log(`🔍 Buscando categoria para o slug: ${slug}`);

                const response = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/categories?slug=${slug}`);
                const data = await response.json();

                if (!Array.isArray(data) || data.length === 0) {
                    throw new Error(`Categoria "${slug}" não encontrada.`);
                }

                const categoryData = data[0];
                setCategory(categoryData);
                console.log("✅ Categoria encontrada:", categoryData);

                // Buscar posts dessa categoria
                console.log(`🔍 Buscando posts da categoria ID: ${categoryData.id}`);
                const postsResponse = await fetch(
                    `https://api.conectasaas.com.br/wp-json/wp/v2/posts?categories=${categoryData.id}&per_page=10`
                );
                const postsData = await postsResponse.json();

                if (!Array.isArray(postsData)) {
                    throw new Error("Erro ao buscar posts: resposta inesperada.");
                }

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
                console.log("✅ Posts carregados:", postsWithImages);
            } catch (error) {
                console.error("❌ Erro:", error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategory();
    }, [slug]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
    if (!category) return <p>Categoria não encontrada.</p>;

    return (
        <CategoryContainer>
            <h1>{category.name.toUpperCase()}</h1>
            <Banner/>
            <NewsList>
                {posts.slice(4).map((post) => (
                    <CardSecundario key={post.id} post={post} />
                ))}
            </NewsList>
        </CategoryContainer>
    );
};

export default CategoryPage;
