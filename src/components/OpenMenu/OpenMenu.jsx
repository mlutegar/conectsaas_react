import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MenuOverlay, MenuContainer, CloseButton, MenuList, SocialIcons } from "./Style";
import {SvgBisk, SvgClose, SvgInstagram, SvgLinkedin, SvgTwitter, SvgX} from "../Svgs/Svgs";
import WordPressApi from "../../services/wordpressApi";
import {FaInstagram, FaLinkedin} from "react-icons/fa";

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
                    <a href="https://x.com/conectasaas" target="_blank" rel="noopener noreferrer"><SvgX /></a>
                    <a href="https://bsky.app/profile/conectasaas.bsky.social" target="_blank" rel="noopener noreferrer"><SvgBisk /></a>
                    <a href="https://www.instagram.com/conectasaas/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/company/conecta-saas" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </SocialIcons>
            </MenuContainer>
        </MenuOverlay>
    );
};

export default OpenMenu;
