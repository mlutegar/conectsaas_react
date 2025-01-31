import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {SidebarContainer, SearchBar, RecentPosts, RecentPostItem, SearchInput, SearchButton} from "./Style";
import {FaSearch} from "react-icons/fa";
import CardPrimario from "../CardPrimario/CardPrimario"; // Importando o CardPrincipal

const Sidebar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                const response = await fetch("https://api.conectasaas.com.br/wp-json/wp/v2/posts?per_page=4");
                const data = await response.json();
                setRecentPosts(data);
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
                    <FaSearch/>
                </SearchButton>
            </SearchBar>

            {/* Posts Recentes */}
            <h3>Recentes</h3>
            <RecentPosts>
                {recentPosts.map((post) => (
                    <CardPrimario
                        key={post.id}
                        post={post}
                        imageUrl={post.jetpack_featured_media_url || "/fallback.jpg"}
                        title={post.title.rendered}
                    />
                ))}
            </RecentPosts>
        </SidebarContainer>
    );
};

export default Sidebar;
