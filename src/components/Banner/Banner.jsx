import { useEffect, useState, memo } from "react";
import CardPrimario from "../cards/CardPrimario/CardPrimario";
import CardPequenoBanner from "../cards/CardPequenosBanner/CardPequenoBanner";
import { BannerContainer, MainPost, SidePosts } from "./Style";
import WordPressApi from "../../services/wordpressApi";

const Banner = memo(({ categoriaNome = null, paginaCategoria = false }) => {
    const [posts, setPosts] = useState([]);
    const [categoriaData, setCategoriaData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [categoryMap, setCategoryMap] = useState({}); // Mapeia IDs para nomes das categorias

    console.log(`AnaliseAtual ➡️ Renderizando Banner | categoriaNome: ${categoriaNome} | paginaCategoria: ${paginaCategoria}`);

    // 🔹 Busca os dados da categoria com base no slug (se estivermos em uma página de categoria)
    useEffect(() => {
        const fetchCategoriaData = async () => {
            if (!categoriaNome) {
                console.log("AnaliseAtual ❌ Nenhuma categoria específica. Exibindo posts de todas as categorias.");
                setCategoriaData(null);
                return;
            }

            try {
                setLoading(true);
                console.log(`AnaliseAtual 🔍 Buscando categoria "${categoriaNome}"...`);

                const categoria = await WordPressApi.getCategoryBySlug(categoriaNome);

                if (categoria) {
                    console.log(`AnaliseAtual ✅ Categoria "${categoriaNome}" encontrada. ID: ${categoria.id}`);
                    setCategoriaData(categoria);
                } else {
                    console.warn(`AnaliseAtual ⚠️ Categoria "${categoriaNome}" não encontrada.`);
                    setCategoriaData(null);
                }
            } catch (error) {
                console.error("AnaliseAtual ❌ Erro ao buscar categoria:", error);
                setCategoriaData(null);
            }
        };

        fetchCategoriaData();
    }, [categoriaNome]);

    // 🔹 Busca os nomes das categorias para mapear ID → Nome
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                console.log("AnaliseAtual 🔍 Buscando todas as categorias...");
                const categories = await WordPressApi.getCategories();

                const categoryMap = categories.reduce((acc, category) => {
                    acc[category.id] = category.name; // Associa ID ao Nome da Categoria
                    return acc;
                }, {});

                setCategoryMap(categoryMap);
                console.log("AnaliseAtual ✅ Mapeamento de categorias criado:", categoryMap);
            } catch (error) {
                console.error("AnaliseAtual ❌ Erro ao buscar categorias:", error);
            }
        };

        fetchCategories();
    }, []);

    // 🔹 Busca os posts quando a categoria mudar
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                let params = { per_page: 5 };

                if (categoriaData?.id) {
                    params.categories = categoriaData.id;
                }

                console.log(`AnaliseAtual 🔍 Buscando posts com os parâmetros:`, params);
                let data = await WordPressApi.getPosts(params);
                data = await WordPressApi.getPostsWithMedia(data);

                console.log(`AnaliseAtual ✅ ${data.length} posts carregados.`, data);

                setPosts(data);
                setLoading(false);
            } catch (error) {
                console.error("AnaliseAtual ❌ Erro ao buscar posts:", error);
                setLoading(false);
            }
        };

        if (categoriaNome === null || categoriaData !== null) {
            fetchPosts();
        }
    }, [categoriaData, categoriaNome]);

    // 🔹 Debugando os posts carregados
    useEffect(() => {
        console.log("AnaliseAtual 📝 Posts armazenados no estado:", posts);
    }, [posts]);

    if (loading) return <p>Carregando notícias...</p>;

    if (posts.length === 0) return <p>Nenhuma notícia encontrada.</p>;

    return (
        <BannerContainer>
            {/* Post Principal */}
            <MainPost>
                <CardPrimario
                    post={posts[0]}
                    tamanhoMenor={true}
                    catName={
                        paginaCategoria
                            ? categoriaData?.name // Se for na página de categoria, usa o nome correto
                            : categoryMap[posts[0]?.categories?.[0]] // Se estiver na home, pega o nome da primeira categoria
                    }
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
                        catName={
                            paginaCategoria
                                ? categoriaData?.name // Se for na página de categoria, usa o nome correto
                                : categoryMap[post.categories?.[0]] // Se estiver na home, pega o nome da primeira categoria
                        } // Pega o nome da categoria pelo ID
                    />
                ))}
            </SidePosts>
        </BannerContainer>
    );
});

export default Banner;
