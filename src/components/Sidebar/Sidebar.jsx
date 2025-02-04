import { useEffect, useState } from "react";
import { SidebarContainer, SearchBar, RecentPosts, SearchInput, SearchButton } from "./Style";
import { FaSearch } from "react-icons/fa";
import CardPrimario from "../cards/CardPrimario/CardPrimario";
import WordPressApi from "../../services/wordpressApi";

const Sidebar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                let posts = await WordPressApi.getPosts({ per_page: 4 });
                posts = await WordPressApi.getPostsWithMedia(posts);
                setRecentPosts(posts);
            } catch (error) {
                console.error("Erro ao buscar posts recentes:", error);
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
                    />
                ))}
            </RecentPosts>
        </SidebarContainer>
    );
};

export default Sidebar;
