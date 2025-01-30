import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarContainer, SearchBar, RecentPosts, RecentPostItem, SearchInput, SearchButton } from "./Style";
import { FaSearch } from "react-icons/fa";

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
                    <FaSearch />
                </SearchButton>
            </SearchBar>

            {/* Posts Recentes */}
            <h3>Recentes</h3>
            <RecentPosts>
                {recentPosts.map((post) => (
                    <RecentPostItem key={post.id}>
                        <Link to={`/post/${post.slug}`}>
                            <img src={post.jetpack_featured_media_url || "/fallback.jpg"} alt={post.title.rendered} />
                        </Link>
                        <Link to={`/post/${post.slug}`}>
                            <h4 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </Link>
                    </RecentPostItem>
                ))}
            </RecentPosts>
        </SidebarContainer>
    );
};

export default Sidebar;
