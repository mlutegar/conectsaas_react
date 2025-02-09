import { Link } from "react-router-dom";
import { CardContainer, CardImage, CardContent, CardTitle, CardInfo } from "./Style";
import { SvgRelogio } from "../../Svgs/Svgs";
import { memo } from "react";
import ButtomCategory from "../ButtomCategory/ButtomCategory";

const CardPequenoBanner = memo(({ post, modoEscuro = false, hideCategory = false }) => {
    return (
        <CardContainer modoEscuro={modoEscuro}>
            {/* Imagem do Post */}
            <Link to={`/post/${post.slug}`}>
                <CardImage src={post.imageUrl} alt={post.title.rendered} />
            </Link>

            <CardContent>
                {/* 🔹 Só exibe o botão de categoria se "hideCategory" for falso */}
                {!hideCategory && <ButtomCategory modoEscuro={modoEscuro} name={post.categories[0]?.name} modoPequeno={true} />}

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

export default CardPequenoBanner;
