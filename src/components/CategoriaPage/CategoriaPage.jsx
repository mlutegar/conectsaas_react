import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoryContainer, BannerContainer, NewsList } from "./Style";
import CardPrimario from "../../components/CardPrimario/CardPrimario";
import CardSecundario from "../../components/CardSecundario/CardSecundario";

const CategoryPage = () => {
    const { slug } = useParams(); // Obtém o slug da categoria pela URL
    const [category, setCategory] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/categories?slug=${slug}`);
                const data = await response.json();

                if (data.length > 0) {
                    setCategory(data[0]);

                    // Buscar posts dessa categoria
                    const postsResponse = await fetch(
                        `https://api.conectasaas.com.br/wp-json/wp/v2/posts?categories=${data[0].id}&per_page=10`
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
                console.error("Erro ao buscar categoria:", error);
                setLoading(false);
            }
        };

        fetchCategory();
    }, [slug]);

    if (loading) return <p>Carregando...</p>;
    if (!category) return <p>Categoria não encontrada.</p>;

    return (
        <CategoryContainer>
            <h1>{category.name.toUpperCase()}</h1>

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

            {/* Lista de Notícias da Categoria */}
            <NewsList>
                {posts.slice(4).map((post) => (
                    <CardSecundario key={post.id} post={post} />
                ))}
            </NewsList>
        </CategoryContainer>
    );
};

export default CategoryPage;