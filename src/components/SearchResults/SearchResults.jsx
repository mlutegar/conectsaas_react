import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchContainer, SearchTitle, ResultsList } from "./Style";
import CardDestaque from "../cards/CardDestaque/CardDestaque";
import CardAutor from "../cards/CardAutor/CardAutor";
import WordPressApi from "../../services/wordpressApi";

const SearchResults = () => {
    const { query } = useParams();
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [categoryMap, setCategoryMap] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                console.log(`AnaliseAtual 🔍 Buscando resultados para: "${query}"`);

                // 🔹 Buscar categorias e mapear ID → Nome
                const allCategories = await WordPressApi.getCategories();
                const categoryMap = allCategories.reduce((acc, category) => {
                    acc[category.id] = category.name;
                    return acc;
                }, {});

                setCategoryMap(categoryMap);
                console.log("AnaliseAtual ✅ Mapeamento de categorias:", categoryMap);

                // 🔹 Buscar posts
                let postsData = await WordPressApi.search(query, "posts");
                postsData = await WordPressApi.getPostsWithMedia(postsData);

                // 🔹 Buscar categorias pelo nome
                const matchedCategories = allCategories.filter(category =>
                    category.name.toLowerCase().includes(query.toLowerCase())
                );

                // 🔹 Buscar autores pelo nome
                const allAuthors = await WordPressApi.getUsers();
                const matchedAuthors = allAuthors.filter(author =>
                    author.name.toLowerCase().includes(query.toLowerCase())
                );

                // 🔹 Buscar posts dos autores encontrados
                let authorPosts = [];
                for (const author of matchedAuthors) {
                    try {
                        let authorPostsData = await WordPressApi.getPosts({ author: author.id });
                        authorPostsData = await WordPressApi.getPostsWithMedia(authorPostsData);
                        authorPosts = [...authorPosts, ...authorPostsData];
                    } catch {
                        console.error(`Erro ao buscar posts do autor ${author.name}`);
                    }
                }

                // 🔹 Atualiza os estados
                setPosts([...postsData, ...authorPosts]); // Adiciona os posts dos autores
                setCategories(matchedCategories);
                setAuthors(matchedAuthors);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar resultados:", error);
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [query]);

    if (loading) return <p>Carregando resultados...</p>;
    if (posts.length === 0 && categories.length === 0 && authors.length === 0) {
        return <p>Nenhum resultado encontrado para "{query}".</p>;
    }

    return (
        <SearchContainer>
            <SearchTitle>Resultados da pesquisa por: {query}</SearchTitle>

            {/* Resultados de Autores */}
            {authors.length > 0 && (
                <section>
                    <h2>Autores</h2>
                    <ResultsList>
                        {authors.map((author) => (
                            <CardAutor key={author.id} author={author} />
                        ))}
                    </ResultsList>
                </section>
            )}

            {/* Resultados de Categorias */}
            {categories.length > 0 && (
                <section>
                    <h2>Categorias</h2>
                    <ResultsList>
                        {categories.map((category) => (
                            <CardDestaque key={category.id} category={category} />
                        ))}
                    </ResultsList>
                </section>
            )}

            {/* Resultados de Notícias */}
            {posts.length > 0 && (
                <section>
                    <h2>Notícias</h2>
                    <ResultsList>
                        {posts.map((post) => (
                            <CardDestaque
                                key={post.id}
                                post={post}
                                catName={post.categories?.length > 0 ? categoryMap[post.categories[0]] : "Sem categoria"}
                            />
                        ))}
                    </ResultsList>
                </section>
            )}
        </SearchContainer>
    );
};

export default SearchResults;
