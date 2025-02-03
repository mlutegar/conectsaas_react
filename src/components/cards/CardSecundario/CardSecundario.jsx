import { Link } from "react-router-dom";
import { CardContainer, CardImage, CardContent, CardCategory, CardTitle, CardInfo } from "./Style";
import {SvgRelogio} from "../../Svgs/Svgs";
import {memo} from "react";
import ButtomCategory from "../ButtomCategory/ButtomCategory";

const CardSecundario = memo(({ post, modoEscuro = false }) => {
    console.log(post.categories);

    return (
        <CardContainer modoEscuro={modoEscuro}>
            {/* Imagem do Post */}
            <Link to={`/post/${post.slug}`}>
                <CardImage src={post.imageUrl} alt={post.title.rendered} />
            </Link>

            <CardContent>
                <ButtomCategory modoEscuro={modoEscuro} name={post.categories[0]?.name} />
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

export default CardSecundario;
