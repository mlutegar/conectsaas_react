import { Link } from "react-router-dom";
import { CardContainer, CardImage, CardContent, CardCategory, CardTitle, CardInfo } from "./Style";
import {SvgRelogio} from "../../Svgs/Svgs";
import {memo} from "react";

const CardSecundario = memo(({ post, modoEscuro = false }) => {
    return (
        <CardContainer modoEscuro={modoEscuro}>
            {/* Imagem do Post */}
            <Link to={`/post/${post.slug}`}>
                <CardImage src={post.imageUrl} alt={post.title.rendered} />
            </Link>

            <CardContent>
                {/* Categoria */}
                <CardCategory modoEscuro={modoEscuro}>{post.categories[0]?.name || "CATEGORIA"}</CardCategory>

                {/* Título */}
                <Link to={`/post/${post.slug}`}>
                    <CardTitle modoEscuro={modoEscuro} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </Link>

                {/* Tempo de Postagem */}
                <CardInfo modoEscuro={modoEscuro}>
                    <SvgRelogio modoEscuro={modoEscuro} /> {new Date(post.date).toLocaleDateString()}
                </CardInfo>
            </CardContent>
        </CardContainer>
    );
});

export default CardSecundario;
