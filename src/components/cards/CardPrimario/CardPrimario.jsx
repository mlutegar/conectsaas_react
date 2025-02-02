import {Link} from "react-router-dom";
import {CardContainer, CardImage, CardCategory, CardTitle, CardInfo, Conteudo} from "./Style";
import {SvgRelogio} from "../../Svgs/Svgs";
import {memo} from "react";

const CardPrimario = memo(({post, modoEscuro = false, primeiro = false}) => {
    return (
        <CardContainer modoEscuro={modoEscuro} primeiro={primeiro}>
            <Link to={`/post/${post.slug}`}>
                <CardImage src={post.imageUrl} alt={post.title.rendered} primeiro={primeiro}/>
            </Link>

            <Conteudo>
                <CardCategory modoEscuro={modoEscuro}>{post.categories[0]?.name || "CATEGORIA"}</CardCategory>

                <Link to={`/post/${post.slug}`}>
                    <CardTitle modoEscuro={modoEscuro} dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
                </Link>

                <CardInfo modoEscuro={modoEscuro}>
                    <SvgRelogio modoEscuro={modoEscuro}/> {new Date(post.date).toLocaleDateString()}
                </CardInfo>
            </Conteudo>
        </CardContainer>
    );
});

export default CardPrimario;
