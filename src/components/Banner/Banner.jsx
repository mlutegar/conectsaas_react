import { useEffect, useState, useRef, memo } from "react";
import CardPrimario from "../cards/CardPrimario/CardPrimario";
import CardSecundario from "../cards/CardSecundario/CardSecundario";
import { BannerContainer, MainPost, SidePosts } from "./Style";
import WordPressApi from "../../services/wordpressApi";
import CardPequenoBanner from "../cards/CardPequenosBanner/CardPequenoBanner";

const Banner = memo(({ categoriaNome = null, paginaCategoria = false }) => {
    const [posts, setPosts] = useState([]);
    const [categoriaData, setCategoriaData] = useState(null);
    const isFetched = useRef(false);

    useEffect(() => {
        const fetchCategoriaData = async () => {
            if (!categoriaNome) return;

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
        if (isFetched.current) return;
        isFetched.current = true;

        const fetchPosts = async () => {
            try {
                const params = { per_page: 5 };
                // Se houver dados da categoria, adiciona o ID aos parâmetros
                if (categoriaData?.id) {
                    params.categories = categoriaData.id;
                }

                console.log(`🔍 Buscando posts com os parâmetros:`, params);
                let data = await WordPressApi.getPosts(params);
                data = await WordPressApi.getPostsWithMedia(data);

                setPosts(data);
            } catch (error) {
                console.error("❌ Erro ao buscar posts:", error);
            }
        };

        // Se não for passada uma categoria específica ou se já tivermos os dados da categoria, buscamos os posts
        if (categoriaNome === null || (categoriaData && categoriaData.id)) {
            fetchPosts();
        }
    }, [categoriaData, categoriaNome]);

    if (posts.length === 0) return <p>Carregando notícias...</p>;

    return (
        <BannerContainer>
            {/* Post Principal */}
            <MainPost>
                <CardPrimario
                    post={posts[0]}
                    tamanhoMenor={true}
                    // Passa o nome da categoria para o CardPrimario para exibição no botão
                    catName={categoriaData?.name}
                    primeiro={true}
                />
            </MainPost>

            {/* Posts Secundários - 2 colunas e 2 linhas */}
            <SidePosts>
                {posts.slice(1, 5).map((post) => (
                    <CardPequenoBanner key={post.id} post={post} />
                ))}
            </SidePosts>
        </BannerContainer>
    );
});

export default Banner;
