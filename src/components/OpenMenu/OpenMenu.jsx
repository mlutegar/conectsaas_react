import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuOverlay, MenuContainer, CloseButton, MenuList, SocialIcons } from "./Style";
import {SvgClose, SvgInstagram, SvgLinkedin, SvgTwitter} from "../Svgs/Svgs";

const OpenMenu = ({ isOpen, onClose }) => {
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);

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

    return (
        <MenuOverlay isOpen={isOpen} onClick={onClose}>
            <MenuContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <SvgClose />
                </CloseButton>

                <MenuList>
                    <Link to="/" onClick={onClose}>INÍCIO</Link>

                    {categories.length > 0 &&
                        categories.map((category) => (
                            <Link key={category.id} to={`/categoria/${category.slug}`} onClick={onClose}>
                                {category.name.toUpperCase()}
                            </Link>
                        ))}
                </MenuList>

                <hr />

                <SocialIcons>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <SvgTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <SvgInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <SvgLinkedin />
                    </a>
                </SocialIcons>
            </MenuContainer>
        </MenuOverlay>
    );
};

export default OpenMenu;