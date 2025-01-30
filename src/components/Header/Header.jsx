import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa"; // Ícones de busca e fechar
import { Top, Navbar, Logo, AuthLinks, NewsBar, SearchBarContainer, SearchInput } from "./Style";
import {SvgLogo, SvgLupa, SvgMenu} from "../Svgs/Svgs";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Buscar categorias da API do WordPress
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

                    <AuthLinks>
                        {/* Ícone da Lupa para abrir a Search Bar */}
                        {searchOpen ? (
                            <SvgLupa className="search-icon" onClick={() => setSearchOpen(false)} />
                        ) : (
                            <SvgLupa className="search-icon" onClick={() => setSearchOpen(true)} />
                        )}
                        <SvgMenu />
                    </AuthLinks>
                </Navbar>

                {/* Barra de Pesquisa (Exibe quando searchOpen for true) */}
                {searchOpen && (
                    <SearchBarContainer>
                        <SearchInput
                            type="text"
                            placeholder="Digite sua busca..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <FaSearch className="search-icon" />
                        <FaTimes className="close-icon" onClick={() => setSearchOpen(false)} />
                    </SearchBarContainer>
                )}
            </Top>

            {/* Barra de Categorias */}
            <NewsBar>
                <div className="categories-container">
                    <Link to="/">INÍCIO</Link>
                    {categories.length > 0 &&
                        categories.map((category, index) => (
                            <Link key={index} to={`/categoria/${category.slug}`}>
                                {category.name}
                            </Link>
                        ))}
                </div>
            </NewsBar>
        </>
    );
};

export default Header;
