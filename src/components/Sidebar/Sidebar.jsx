import { useEffect, useState } from "react";
import { SidebarContainer, SearchBar, RecentPosts, SearchInput, SearchButton } from "./Style";
import { FaSearch } from "react-icons/fa";
import CardPrimario from "../cards/CardPrimario/CardPrimario";
import WordPressApi from "../../services/wordpressApi";

const Sidebar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [recentPosts, setRecentPosts] = useState([]);
    const [categoryMap, setCategoryMap] = useState({}); // 🔹 Mapeia IDs para nomes das categorias

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

    // 🔹 Busca os posts recentes
    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                console.log("AnaliseAtual 🔍 Buscando posts recentes...");
                let posts = await WordPressApi.getPosts({ per_page: 4 });
                posts = await WordPressApi.getPostsWithMedia(posts);

                console.log("AnaliseAtual ✅ Posts recentes carregados:", posts);
                setRecentPosts(posts);
            } catch (error) {
                console.error("AnaliseAtual ❌ Erro ao buscar posts recentes:", error);
            }
        };

        fetchRecentPosts();
    }, []);

    return (
        <SidebarContainer>
            {/* Barra de Pesquisa */}
            <SearchBar>
                <SearchInput
                    type="text"
                    placeholder="Pesquisa"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <SearchButton>
                    <FaSearch />
                </SearchButton>
            </SearchBar>

            {/* Posts Recentes */}
            <h3>Recentes</h3>
            <RecentPosts>
                {recentPosts.map((post) => (
                    <CardPrimario
                        key={post.id}
                        post={post}
                        imageUrl={post.imageUrl} // Agora a URL da imagem estará sempre definida corretamente
                        title={post.title.rendered}
                        catName={categoryMap[post.categories?.[0]]} // 🔹 Busca o nome da categoria usando o mapa
                    />
                ))}
            </RecentPosts>
        </SidebarContainer>
    );
};

export default Sidebar;
