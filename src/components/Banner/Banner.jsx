import { useEffect, useState, memo } from "react";
import CardPrimario from "../cards/CardPrimario/CardPrimario";
import CardPequenoBanner from "../cards/CardPequenosBanner/CardPequenoBanner";
import { BannerContainer, MainPost, SidePosts } from "./Style";
import WordPressApi from "../../services/wordpressApi";

const Banner = memo(({ categoriaNome = null, paginaCategoria = false }) => {
    const [posts, setPosts] = useState([]);
    const [categoriaData, setCategoriaData] = useState(null);
    const [loading, setLoading] = useState(true);

    // 🔹 Busca os dados da categoria com base no slug
    useEffect(() => {
        const fetchCategoriaData = async () => {
            if (!categoriaNome) {
                setCategoriaData(null);
                return;
            }

            try {
                setLoading(true);
                const categoria = await WordPressApi.getCategoryBySlug(categoriaNome);
                if (categoria) {
                    setCategoriaData(categoria);
                    console.log(`✅ Categoria "${categoriaNome}" encontrada. ID: ${categoria.id}`);
                } else {
                    console.warn(`⚠️ Categoria "${categoriaNome}" não encontrada.`);
                    setCategoriaData(null);
                }
            } catch (error) {
                console.error("❌ Erro ao buscar categoria:", error);
                setCategoriaData(null);
            }
        };

        fetchCategoriaData();
    }, [categoriaNome]);

    // 🔹 Busca os posts quando a categoria mudar
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                let params = { per_page: 5 };

                if (categoriaData?.id) {
                    params.categories = categoriaData.id;
                }

                console.log(`🔍 Buscando posts com os parâmetros:`, params);
                let data = await WordPressApi.getPosts(params);
                data = await WordPressApi.getPostsWithMedia(data);

                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error("❌ Erro ao buscar posts:", error);
                setLoading(false);
            }
        };

        if (categoriaNome === null || categoriaData !== null) {
            fetchPosts();
        }
    }, [categoriaData, categoriaNome]);

    if (loading) return <p>Carregando notícias...</p>;

    if (posts.length === 0) return <p>Nenhuma notícia encontrada.</p>;

    return (
        <BannerContainer>
            {/* Post Principal */}
            <MainPost>
                <CardPrimario
                    post={posts[0]}
                    tamanhoMenor={true}
                    catName={paginaCategoria ? categoriaData?.name : posts[0]?.categories?.[0]?.name}
                    primeiro={true}
                    ocultarCategoria={paginaCategoria}
                />
            </MainPost>

            {/* Posts Secundários - 2 colunas e 2 linhas */}
            <SidePosts>
                {posts.slice(1, 5).map((post) => (
                    <CardPequenoBanner
                        key={post.id}
                        post={post}
                        hideCategory={paginaCategoria}
                        catName={post.categories?.[0]?.name}
                    />
                ))}
            </SidePosts>
        </BannerContainer>
    );
});

export default Banner;
