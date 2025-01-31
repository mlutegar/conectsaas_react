import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuOverlay, MenuContainer, CloseButton, MenuList, SocialIcons } from "./Style";
import { SvgClose } from "../Svgs/Svgs";

const OpenMenu = ({ isOpen, onClose }) => {
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);

    // Buscar categorias e autores da API
    useEffect(() => {
        fetch("https://api.conectasaas.com.br/wp-json/wp/v2/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Erro ao buscar categorias:", error));

        fetch("https://api.conectasaas.com.br/wp-json/wp/v2/users")
            .then((response) => response.json())
            .then((data) => setAuthors(data))
            .catch((error) => console.error("Erro ao buscar autores:", error));
    }, []);

    if (!isOpen) return null;

    return (
        <MenuOverlay>
            <MenuContainer>
                <CloseButton onClick={onClose}>
                    <SvgClose />
                </CloseButton>

                <MenuList>
                    <Link to="/" onClick={onClose}>INÍCIO</Link>

                    {categories.length > 0 && categories.map((category) => (
                        <Link key={category.id} to={`/categoria/${category.slug}`} onClick={onClose}>
                            {category.name.toUpperCase()}
                        </Link>
                    ))}

                    <hr />

                    {authors.length > 0 && authors.map((author) => (
                        <Link key={author.id} to={`/autor/${author.slug}`} onClick={onClose}>
                            {author.name}
                        </Link>
                    ))}
                </MenuList>

                <SocialIcons>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">🔗</a>
                </SocialIcons>
            </MenuContainer>
        </MenuOverlay>
    );
};

export default OpenMenu;