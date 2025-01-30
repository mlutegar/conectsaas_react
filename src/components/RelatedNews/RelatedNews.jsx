import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RelatedContainer, RelatedTitle, RelatedList, RelatedItem } from "./Style";

const RelatedNews = ({ categoryId }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        const fetchRelatedNews = async () => {
            try {
                const response = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/posts?categories=${categoryId}&per_page=3`);
                const data = await response.json();
                setRelatedPosts(data);
            } catch (error) {
                console.error("Erro ao buscar notícias relacionadas:", error);
            }
        };

        if (categoryId) {
            fetchRelatedNews();
        }
    }, [categoryId]);

    if (relatedPosts.length === 0) return null;

    return (
        <RelatedContainer>
            <RelatedTitle>Notícias Relacionadas</RelatedTitle>
            <RelatedList>
                {relatedPosts.map((post) => (
                    <RelatedItem key={post.id}>
                        <Link to={`/post/${post.slug}`}>
                            <h4 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </Link>
                    </RelatedItem>
                ))}
            </RelatedList>
        </RelatedContainer>
    );
};

export default RelatedNews;
