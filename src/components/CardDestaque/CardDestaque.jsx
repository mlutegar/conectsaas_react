import { Link } from "react-router-dom";
import { CardContainer, CardImage, CardContent, CardTitle, CardExcerpt, CardInfo } from "./Style";
import {SvgRelogio} from "../Svgs/Svgs";

const CardDestaque = ({ post, modoEscuro = false }) => {
    return (
        <CardContainer modoEscuro={modoEscuro}>
            {/* Imagem do Post */}
            <Link to={`/post/${post.slug}`}>
                <CardImage src={post.imageUrl} alt={post.title.rendered} />
            </Link>

            {/* Conteúdo */}
            <CardContent>
                {/* Título */}
                <Link to={`/post/${post.slug}`}>
                    <CardTitle modoEscuro={modoEscuro} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </Link>

                {/* Trecho do texto */}
                <CardExcerpt modoEscuro={modoEscuro} dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.slice(0, 150) + "..." }} />

                {/* Tempo de Postagem */}
                <CardInfo modoEscuro={modoEscuro}>
                    <SvgRelogio modoEscuro={modoEscuro} /> {new Date(post.date).toLocaleDateString()}
                </CardInfo>
            </CardContent>
        </CardContainer>
    );
};

export default CardDestaque;
