import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FooterContainer, FooterContent, FooterSection, FooterBottom, CategoriesGrid, SocialIcons } from "./Style";
import { SvgLogo } from "../Svgs/Svgs";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://api.conectasaas.com.br/wp-json/wp/v2/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Erro ao buscar categorias:", error));
    }, []);

    return (
        <FooterContainer>
            <FooterContent>
                {/* Logo */}
                <FooterSection>
                    <SvgLogo />
                </FooterSection>

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
                    <Link to="/sobre-nos">Sobre nós</Link>
                </FooterSection>

                {/* Redes Sociais */}
                <FooterSection>
                    <SocialIcons>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </SocialIcons>
                </FooterSection>
            </FooterContent>

            {/* Rodapé */}
            <FooterBottom>
                <p>ConectaSaaS © 2025 Todos os direitos reservados.</p>
                <Link to="/termos-de-uso">Termos de uso</Link>
                <Link to="/politica-de-privacidade">Política de privacidade</Link>
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;