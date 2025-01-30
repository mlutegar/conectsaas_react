import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch, FaBars } from "react-icons/fa"; // Ícones de busca e menu
import { Top, Navbar, Logo, Menu, MenuItem, MenuToggle, AuthLinks, NewsBar } from "./Style";
import { SvgLogo } from "../Svgs/Svgs";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    // Buscar as últimas notícias na API do WordPress
    useEffect(() => {
        fetch("https://api.conectasaas.com.br/wp-json/wp/v2/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Erro ao buscar notícias:", error));
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
                        <FaSearch className="search-icon" />
                        <MenuToggle onClick={() => setMenuOpen(!menuOpen)}>
                            <FaBars />
                        </MenuToggle>
                    </AuthLinks>
                </Navbar>
            </Top>

            {/* Barra de Notícias (Cinza com Borda Preta) */}
            <NewsBar>
                <div className="categories-container">
                    <Link to="/">INÍCIO</Link>
                    {categories.length > 0 &&
                        categories.map((category, index) => (
                            <Link key={index} to={`/categoria/${category.slug}`}>
                                {category.name}
                            </Link>
                        ))
                    }
                </div>
            </NewsBar>
        </>
    );
};

export default Header;
