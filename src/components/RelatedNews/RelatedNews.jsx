import { useEffect, useState } from "react";
import { RelatedContainer, RelatedTitle, RelatedList } from "./Style";
import CardSecundario from "../cards/CardSecundario/CardSecundario";
import WordPressApi from "../../services/wordpressApi";

const RelatedNews = ({ categoryId }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [categoryMap, setCategoryMap] = useState({});

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                console.log("AnaliseAtual 🔍 Buscando todas as categorias...");
                const categories = await WordPressApi.getCategories();

                const categoryMap = categories.reduce((acc, category) => {
                    acc[category.id] = category.name; // Associa ID ao Nome da Categoria
                    return acc;
                }, {});

                setCategoryMap(categoryMap);
                console.log("AnaliseAtual ✅ Mapeamento de categorias criado:", categoryMap);
            } catch (error) {
                console.error("AnaliseAtual ❌ Erro ao buscar categorias:", error);
            }
        };

        fetchCategories();
    }, []);


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
                    <CardSecundario
                        key={post.id}
                        post={post}
                        catName={categoryMap[post.categories?.[0]]} // 🔹 Busca o nome da categoria correta
                    />
                ))}

            </RelatedList>
        </RelatedContainer>
    );
};

export default RelatedNews;
