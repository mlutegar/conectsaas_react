import { Link } from "react-router-dom";
import { CardContainer, CardImage, CardContent, CardTitle, CardExcerpt, CardInfo } from "./Style";
import {memo} from "react";
import ButtomCategory from "../ButtomCategory/ButtomCategory";
import {SvgRelogio} from "../../Svgs/Svgs";

const CardDestaque = memo(({ post, modoEscuro = false }) => {
    return (
        <CardContainer modoEscuro={modoEscuro}>
            <Link to={`/post/${post.slug}`}>
                <CardImage src={post.imageUrl} alt={post.title.rendered} />
            </Link>
            <CardContent>
                <Link to={`/post/${post.slug}`}>
                    <ButtomCategory modoEscuro={modoEscuro} name={post.categories[0]?.name} />
                    <Link to={`/post/${post.slug}`}>
                        <CardTitle modoEscuro={modoEscuro} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </Link>
                    <CardInfo modoEscuro={modoEscuro}>
                        <SvgRelogio modoEscuro={modoEscuro} /> {new Date(post.date).toLocaleDateString()}
                    </CardInfo>
                </Link>
                {/*<CardExcerpt modoEscuro={modoEscuro} dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.slice(0, 150) + "..." }} />*/}
            </CardContent>
        </CardContainer>
    );
});

export default CardDestaque;
