import { Link } from "react-router-dom";
import { CardContainer, CardImage, CardContent, CardTitle, CardExcerpt, CardInfo } from "./Style";
import { memo } from "react";
import ButtomCategory from "../ButtomCategory/ButtomCategory";
import { SvgRelogio } from "../../Svgs/Svgs";

const CardDestaque = memo(({ post, modoEscuro = false, ocultarCategoria = false, catName }) => {
    return (
        <CardContainer modoEscuro={modoEscuro}>
            <Link to={`/post/${post.slug}`}>
                <CardImage src={post.imageUrl} alt={post.title.rendered} />
            </Link>
            <CardContent>
                {/* Ocultar Categoria se o props ocultarCategoria for true */}
                {!ocultarCategoria && (
                    <ButtomCategory modoEscuro={modoEscuro} name={catName || "Sem categoria"} />
                )}

                <Link to={`/post/${post.slug}`}>
                    <CardTitle modoEscuro={modoEscuro} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </Link>

                <CardInfo modoEscuro={modoEscuro}>
                    <SvgRelogio modoEscuro={modoEscuro} /> {new Date(post.date).toLocaleDateString()}
                </CardInfo>
            </CardContent>
        </CardContainer>
    );
});

export default CardDestaque;
