import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {FooterContainer, FooterContent, FooterSection, FooterBottom, CategoriesGrid, SocialIcons, Logo} from "./Style";
import {SvgBisk, SvgLogo, SvgX} from "../Svgs/Svgs";
import { FaTwitter, FaInstagram, FaLinkedin, FaBluetoothB } from "react-icons/fa";
import WordPressApi from "../../services/wordpressApi";

const Footer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await WordPressApi.getCategories();
                setCategories(data);
            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <FooterContainer>
            <FooterContent>
                {/* Logo */}
                <Logo onClick={() => window.scrollTo(0, 0)}>
                    <SvgLogo />
                </Logo>

                {/* Categorias */}
                <FooterSection>
                    <h4>CATEGORIAS</h4>
                    <CategoriesGrid>
                        {categories.map((category) => (
                            <Link key={category.id} to={`/categoria/${category.slug}`}>
                                {category.name}
                            </Link>
                        ))}
                    </CategoriesGrid>
                </FooterSection>

                {/* Institucional */}
                <FooterSection>
                    <h4>INSTITUCIONAL</h4>
                    <Link to="/fale-conosco">Fale conosco</Link>
                    {/*<Link to="/termos-de-uso">Termos de uso</Link>*/}
                </FooterSection>

                {/* Redes Sociais */}
                <FooterSection>
                    <SocialIcons>
                        <a href="https://x.com/conectasaas" target="_blank" rel="noopener noreferrer"><SvgX /></a>
                        <a href="https://bsky.app/profile/conectasaas.bsky.social" target="_blank" rel="noopener noreferrer"><SvgBisk /></a>
                        <a href="https://www.instagram.com/conectasaas/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://www.linkedin.com/company/conecta-saas" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </SocialIcons>
                </FooterSection>
            </FooterContent>

            {/* Rodapé */}
            <FooterBottom>
                <p>ConectaSaaS © 2025 Todos os direitos reservados.</p>
                <Link to="/termos-de-uso">Termos de uso</Link>
                {/*<Link to="/politica-de-privacidade">Política de privacidade</Link>*/}
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;
