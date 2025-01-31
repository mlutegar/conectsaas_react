import { Link } from "react-router-dom";
import { CardContainer, CardImage, CardContent, CardTitle, CardExcerpt, CardInfo } from "./Style";

const CardDestaque = ({ post }) => {
    return (
        <CardContainer>
            {/* Imagem do Post */}
            <Link to={`/post/${post.slug}`}>
                <CardImage src={post.imageUrl} alt={post.title.rendered} />
            </Link>

            {/* Conteúdo */}
            <CardContent>
                {/* Título */}
                <Link to={`/post/${post.slug}`}>
                    <CardTitle dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </Link>

                {/* Trecho do texto */}
                <CardExcerpt dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.slice(0, 150) + "..." }} />

                {/* Tempo de Postagem */}
                <CardInfo>⏳ {new Date(post.date).toLocaleDateString()}</CardInfo>
            </CardContent>
        </CardContainer>
    );
};

export default CardDestaque;