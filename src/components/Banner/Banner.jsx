import { useEffect, useState, useRef, memo } from "react";
import CardPrimario from "../cards/CardPrimario/CardPrimario";
import CardSecundario from "../cards/CardSecundario/CardSecundario";
import { BannerContainer, MainPost, SidePosts } from "./Style";
import WordPressApi from "../../services/wordpressApi";
import CardPequenoBanner from "../cards/CardPequenosBanner/CardPequenoBanner";

const Banner = memo(({ categoriaNome = null, paginaCategoria = false }) => {
    const [posts, setPosts] = useState([]);
    const [categoriaData, setCategoriaData] = useState(null);
    const [loading, setLoading] = useState(true);
    const isFetched = useRef(false);

    useEffect(() => {
        const fetchCategoriaData = async () => {
            if (!categoriaNome) return; // Se não houver categoria específica, pula essa parte

            try {
                const categoria = await WordPressApi.getCategoryBySlug(categoriaNome);
                if (categoria) {
                    setCategoriaData(categoria);
                    console.log(`✅ Categoria "${categoriaNome}" encontrada. ID: ${categoria.id}`);
                } else {
                    console.warn(`⚠️ Categoria "${categoriaNome}" não encontrada.`);
                }
            } catch (error) {
                console.error("❌ Erro ao buscar categoria:", error);
            }
        };

        fetchCategoriaData();
    }, [categoriaNome]);

    useEffect(() => {
        if (isFetched.current || (categoriaNome && !categoriaData)) return;
        isFetched.current = true;

        const fetchPosts = async () => {
            try {
                setLoading(true);
                const params = { per_page: 5 };
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

        fetchPosts();
    }, [categoriaData, categoriaNome]);

    if (loading) return <p>Carregando notícias...</p>;

    if (posts.length === 0) return <p>Nenhuma notícia encontrada.</p>;

    return (
        <BannerContainer>
            <MainPost>
                <CardPrimario
                    post={posts[0]}
                    tamanhoMenor={true}
                    catName={categoriaData?.name}
                    primeiro={true}
                    ocultarCategoria={paginaCategoria}
                />
            </MainPost>

            {/* Posts Secundários - 2 colunas e 2 linhas */}
            <SidePosts>
                {posts.slice(1, 5).map((post) => (
                    <CardPequenoBanner key={post.id} post={post} hideCategory={paginaCategoria} />
                ))}
            </SidePosts>
        </BannerContainer>
    );
});

export default Banner;
