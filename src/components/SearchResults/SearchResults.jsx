import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SearchContainer, SearchTitle, ResultsList, ResultItem } from "./Style";

const SearchResults = () => {
    const { query } = useParams();
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const postsResponse = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/posts?search=${query}`);
                const postsData = await postsResponse.json();

                // Buscar categorias pelo nome
                const categoriesResponse = await fetch("https://api.conectasaas.com.br/wp-json/wp/v2/categories");
                const categoriesData = await categoriesResponse.json();
                const matchedCategories = categoriesData.filter(category =>
                    category.name.toLowerCase().includes(query.toLowerCase())
                );

                // Buscar autores pelo nome e pegar os posts deles
                const authorsResponse = await fetch("https://api.conectasaas.com.br/wp-json/wp/v2/users");
                const authorsData = await authorsResponse.json();
                const matchedAuthors = authorsData.filter(author =>
                    author.name.toLowerCase().includes(query.toLowerCase())
                );

                let authorPosts = [];
                if (matchedAuthors.length > 0) {
                    const authorId = matchedAuthors[0].id; // Assume o primeiro autor correspondente
                    const authorPostsResponse = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/posts?author=${authorId}`);
                    authorPosts = await authorPostsResponse.json();
                }

                setResults([...postsData, ...matchedCategories, ...matchedAuthors, ...authorPosts]);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar resultados:", error);
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [query]);

    if (loading) return <p>Carregando resultados...</p>;
    if (results.length === 0) return <p>Nenhum resultado encontrado para "{query}".</p>;

    return (
        <SearchContainer>
            <SearchTitle>Resultados para "{query}"</SearchTitle>
            <ResultsList>
                {results.map((result) => (
                    <ResultItem key={result.id}>
                        {result.link ? (
                            <Link to={`/post/${result.slug}`}>
                                <h3 dangerouslySetInnerHTML={{ __html: result.title?.rendered || result.name }} />
                            </Link>
                        ) : (
                            <h3>{result.name}</h3>
                        )}
                        {result.description && <p>{result.description}</p>}
                    </ResultItem>
                ))}
            </ResultsList>
        </SearchContainer>
    );
};

export default SearchResults;
