import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Top, Navbar, Logo, AuthLinks, NewsBar, SearchBarContainer, SearchInput, Navegacao } from "./Style";
import { SvgClose, SvgLogo, SvgLupa, SvgMenu } from "../Svgs/Svgs";
import OpenMenu from "../OpenMenu/OpenMenu"; // Importando o menu aberto

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchQuery.trim() !== "") {
            navigate(`/search/${searchQuery}`);
        }
    };

    useEffect(() => {
        fetch("https://api.conectasaas.com.br/wp-json/wp/v2/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Erro ao buscar categorias:", error));
    }, []);

    return (
        <>
            <Top>
                <Navbar>
                    <Logo>
                        <Link to="/">
                            <SvgLogo />
                        </Link>
                    </Logo>

                    <Navegacao>
                        <SearchBarContainer isOpen={searchOpen}>
                            <SearchInput
                                type="text"
                                placeholder="Digite sua busca..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                isOpen={searchOpen}
                            />
                            <SvgLupa className="search-icon" onClick={handleSearch} />
                        </SearchBarContainer>

                        <AuthLinks>
                            {searchOpen ? (
                                <SvgClose className="search-icon" onClick={() => setSearchOpen(false)} />
                            ) : (
                                <SvgLupa className="search-icon" onClick={() => setSearchOpen(prev => !prev)} />
                            )}
                            <SvgMenu className="menu-icon" onClick={() => {
                                setMenuOpen(true);
                                setSearchQuery("");
                            }} />
                        </AuthLinks>
                    </Navegacao>
                </Navbar>
            </Top>

            {/* Barra de Categorias */}
            <NewsBar>
                <div className="categories-container">
                    <Link to="/">INÍCIO</Link>
                    {categories.length > 0 &&
                        categories.map((category, index) => (
                            <Link key={category.id} to={`/categoria/${category.slug}`}>
                                {category.name}
                            </Link>
                        ))}
                </div>
            </NewsBar>

            {/* Menu Aberto */}
            <OpenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
};

export default Header;
