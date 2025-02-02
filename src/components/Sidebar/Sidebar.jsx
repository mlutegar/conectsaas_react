import {useEffect, useState} from "react";
import {SidebarContainer, SearchBar, RecentPosts, SearchInput, SearchButton} from "./Style";
import {FaSearch} from "react-icons/fa";
import CardPrimario from "../CardPrimario/CardPrimario";

const Sidebar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                const response = await fetch("https://api.conectasaas.com.br/wp-json/wp/v2/posts?per_page=4");
                const data = await response.json();

                const postsWithImages = await Promise.all(
                    data.map(async (post) => {
                        if (post.featured_media) {
                            try {
                                const mediaResponse = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/media/${post.featured_media}`);
                                const mediaData = await mediaResponse.json();
                                return { ...post, imageUrl: mediaData.source_url };
                            } catch {
                                return { ...post, imageUrl: "/fallback.jpg" };
                            }
                        }
                        return { ...post, imageUrl: "/fallback.jpg" };
                    })
                );

                setRecentPosts(postsWithImages);
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
                        imageUrl={post.imageUrl} // Agora a URL da imagem estará sempre definida corretamente
                        title={post.title.rendered}
                    />
                ))}
            </RecentPosts>
        </SidebarContainer>
    );
};

export default Sidebar;
