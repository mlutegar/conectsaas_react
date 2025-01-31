import { Link } from "react-router-dom";
import { CardContainer, CardImage, CardCategory, CardTitle, CardInfo } from "./Style";

const CardPrimario = ({ post }) => {
    return (
        <CardContainer>
            {/* Imagem do Post */}
            <Link to={`/post/${post.slug}`}>
                <CardImage src={post.imageUrl} alt={post.title.rendered} />
            </Link>

            {/* CategoriaSecao */}
            <CardCategory>{post.categories[0]?.name || "CATEGORIA"}</CardCategory>

            {/* Título */}
            <Link to={`/post/${post.slug}`}>
                <CardTitle dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </Link>

            {/* Tempo de Postagem */}
            <CardInfo>⏳ {new Date(post.date).toLocaleDateString()}</CardInfo>
        </CardContainer>
    );
};

export default CardPrimario;