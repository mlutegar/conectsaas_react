import { Link } from "react-router-dom";
import { CardContainer, CardImage, CardContent, CardTitle, CardInfo } from "./Style";
import { SvgRelogio } from "../../Svgs/Svgs";
import { memo } from "react";
import ButtomCategory from "../ButtomCategory/ButtomCategory";

const CardSecundario = memo(({ post, modoEscuro = false, ocultarCategoria = false, catName, tipo }) => {
    return (
        <CardContainer modoEscuro={modoEscuro}>
            {/* Imagem do Post */}
            <Link to={`/post/${post.slug}`}>
                <CardImage src={post.imageUrl} alt={post.title.rendered} />
            </Link>

            <CardContent>
                {/* Renderiza a categoria apenas se ocultarCategoria for false */}
                {!ocultarCategoria && (
                    <ButtomCategory modoEscuro={modoEscuro} name={catName} />
                )}

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
