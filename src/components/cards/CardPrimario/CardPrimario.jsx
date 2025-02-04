import { Link } from "react-router-dom";
import {
    CardContainer,
    CardImage,
    CardTitle,
    CardInfo,
    Conteudo
} from "./Style";
import { SvgRelogio } from "../../Svgs/Svgs";
import { memo } from "react";
import ButtomCategory from "../ButtomCategory/ButtomCategory"; // Componente do botão de categoria

// Adicionamos "catName" nas props
const CardPrimario = memo(({ post, modoEscuro = false, primeiro = false, catName }) => {
    return (
        <CardContainer modoEscuro={modoEscuro} primeiro={primeiro}>
            <Link to={`/post/${post.slug}`}>
                <CardImage
                    src={post.imageUrl}
                    alt={post.title.rendered}
                    primeiro={primeiro}
                />
            </Link>

            <Conteudo>
                {/* Se "catName" existir, ele é utilizado; caso contrário, tenta usar post.categories[0]?.name */}
                <ButtomCategory modoEscuro={modoEscuro} name={catName || post.categories[0]?.name} />

                <Link to={`/post/${post.slug}`}>
                    <CardTitle
                        modoEscuro={modoEscuro}
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                </Link>

                <CardInfo modoEscuro={modoEscuro}>
                    <SvgRelogio modoEscuro={modoEscuro} />{" "}
                    {new Date(post.date).toLocaleDateString()}
                </CardInfo>
            </Conteudo>
        </CardContainer>
    );
});

export default CardPrimario;
