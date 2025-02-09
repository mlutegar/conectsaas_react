import {Link} from "react-router-dom";
import {
    CardContainer,
    CardImage,
    CardTitle,
    CardInfo,
    Conteudo
} from "./Style";
import {SvgRelogio} from "../../Svgs/Svgs";
import {memo} from "react";
import ButtomCategory from "../ButtomCategory/ButtomCategory"; // Componente do botão de categoria

const CardPrimario = memo(({post, modoEscuro = false, primeiro = false, catName, ocultarCategoria = false, tipo}) => {
    return (
        <CardContainer modoEscuro={modoEscuro} primeiro={primeiro} tipo={tipo}>
            <Link to={`/post/${post.slug}`}>
                <CardImage
                    src={post.imageUrl}
                    alt={post.title.rendered}
                    primeiro={primeiro}
                />
            </Link>

            <Conteudo>
                {/* Renderiza a categoria apenas se ocultarCategoria for false */}
                {!ocultarCategoria && (
                    <ButtomCategory modoEscuro={modoEscuro} name={catName || post.categories[0]?.name}/>
                )}

                <Link to={`/post/${post.slug}`}>
                    <CardTitle
                        modoEscuro={modoEscuro}
                        dangerouslySetInnerHTML={{__html: post.title.rendered}}
                    />
                </Link>

                <CardInfo modoEscuro={modoEscuro}>
                    <SvgRelogio modoEscuro={modoEscuro}/>{" "}
                    {new Date(post.date).toLocaleDateString()}
                </CardInfo>
            </Conteudo>
        </CardContainer>
    );
});

export default CardPrimario;
