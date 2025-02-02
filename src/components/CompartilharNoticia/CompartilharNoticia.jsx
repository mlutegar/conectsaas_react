import { FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {ShareContainer, ShareText, ShareIcons, Divider, Header} from "./Style";

const CompartilharNoticia = ({ url, title }) => {
    const shareLinks = {
        whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " " + url)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        instagram: "https://instagram.com/"
    };

    return (
        <ShareContainer>
            <Header>
                <Divider />
                <ShareText>Compartilhe essa notícia</ShareText>
                <Divider />
            </Header>
            <ShareIcons>
                <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href={shareLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </ShareIcons>
        </ShareContainer>
    );
};

export default CompartilharNoticia;
