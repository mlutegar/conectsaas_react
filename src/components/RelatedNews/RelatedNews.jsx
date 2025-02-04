import { useEffect, useState } from "react";
import { RelatedContainer, RelatedTitle, RelatedList } from "./Style";
import CardSecundario from "../cards/CardSecundario/CardSecundario";
import WordPressApi from "../../services/wordpressApi";

const RelatedNews = ({ categoryId }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        const fetchRelatedNews = async () => {
            try {
                let posts = await WordPressApi.getPosts({ categories: categoryId, per_page: 3 });
                posts = await WordPressApi.getPostsWithMedia(posts);
                setRelatedPosts(posts);
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
            <RelatedTitle>NOTÍCIAS RELACIONADAS</RelatedTitle>
            <RelatedList>
                {relatedPosts.map((post) => (
                    <CardSecundario key={post.id} post={post} />
                ))}
            </RelatedList>
        </RelatedContainer>
    );
};

export default RelatedNews;
