import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RelatedContainer, RelatedTitle, RelatedList, RelatedItem, RelatedContent, RelatedImage, RelatedCategory } from "./Style";
import CardSecundario from "../CardSecundario/CardSecundario";

const RelatedNews = ({ categoryId }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        const fetchRelatedNews = async () => {
            try {
                const response = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/posts?categories=${categoryId}&per_page=3`);
                const data = await response.json();

                const postsWithImages = await Promise.all(
                    data.map(async (post) => {
                        if (post.featured_media) {
                            try {
                                const mediaResponse = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/media/${post.featured_media}`);
                                const mediaData = await mediaResponse.json();
                                return { ...post, imageUrl: mediaData.source_url };
                            } catch {
                                return { ...post, imageUrl: "/fallback.jpg" }; // Imagem padrão
                            }
                        }
                        return { ...post, imageUrl: "/fallback.jpg" };
                    })
                );

                setRelatedPosts(postsWithImages);
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