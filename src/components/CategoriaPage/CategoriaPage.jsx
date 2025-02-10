import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {CategoryContainer, Titulo} from "./Style";
import Banner from "../Banner/Banner";
import WordPressApi from "../../services/wordpressApi";
import CardTextoLateral from "../cards/CardTextoLateral/CardTextoLateral";
import Sidebar from "../Sidebar/Sidebar";
import {PostContainer, PostWrapper} from "../PostPage/Style";

const CategoryPage = () => {
    const {slug} = useParams(); // Obtém o slug da categoria pela URL
    const [category, setCategory] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                console.log(`🔍 Buscando categoria para o slug: ${slug}`);

                const categoryData = await WordPressApi.getCategoryBySlug(slug);
                if (!categoryData) {
                    throw new Error(`Categoria "${slug}" não encontrada.`);
                }

                setCategory(categoryData);
                console.log("✅ Categoria encontrada:", categoryData);

                // Buscar posts dessa categoria
                console.log(`🔍 Buscando posts da categoria ID: ${categoryData.id}`);
                let postsData = await WordPressApi.getPosts({categories: categoryData.id, per_page: 10});
                postsData = await WordPressApi.getPostsWithMedia(postsData);

                setPosts(postsData);
                console.log("✅ Posts carregados:", postsData);
            } catch (error) {
                console.error("❌ Erro:", error.message);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryData();
    }, [slug]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
    if (!category) return <p>Categoria não encontrada.</p>;

    return (
        <CategoryContainer>
            <Titulo>{category.name.toUpperCase()}</Titulo>
            <Banner paginaCategoria={true} categoriaNome={slug} />
            <PostWrapper>
                <PostContainer>
                {posts.slice(4).map((post) => (
                    <CardTextoLateral key={post.id} post={post} hideCategory={true}/>
                ))}
                </PostContainer>

                <Sidebar />
            </PostWrapper>
        </CategoryContainer>
    );
};

export default CategoryPage;
