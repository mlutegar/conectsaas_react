import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuOverlay, MenuContainer, CloseButton, MenuList, SocialIcons } from "./Style";
import { SvgClose, SvgInstagram, SvgLinkedin, SvgTwitter } from "../Svgs/Svgs";
import WordPressApi from "../../services/wordpressApi";

const OpenMenu = ({ isOpen, onClose }) => {
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoriesData = await WordPressApi.getCategories();
                setCategories(categoriesData);

                const authorsData = await WordPressApi.getUsers();
                setAuthors(authorsData);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
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
