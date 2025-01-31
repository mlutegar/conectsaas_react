import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SearchContainer, SearchTitle, ResultsList } from "./Style";
import CardDestaque from "../CardDestaque/CardDestaque";
import CardCategoria from "../../components/CardCategoria/CardCategoria";
import CardAutor from "../../components/CardAutor/CardAutor";

const SearchResults = () => {
    const { query } = useParams();
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const postsResponse = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/posts?search=${query}`);
                let postsData = await postsResponse.json();

                // Adicionar imagens às postagens
                const postsWithImages = await Promise.all(
                    postsData.map(async (post) => {
                        let imageUrl = "/fallback.jpg";
                        if (post.featured_media) {
                            try {
                                const mediaResponse = await fetch(
                                    `https://api.conectasaas.com.br/wp-json/wp/v2/media/${post.featured_media}`
                                );
                                const mediaData = await mediaResponse.json();
                                imageUrl = mediaData.source_url;
                            } catch {
                                console.error("Erro ao carregar imagem do post.");
                            }
                        }
                        return { ...post, imageUrl };
                    })
                );

                // Buscar categorias pelo nome
                const categoriesResponse = await fetch("https://api.conectasaas.com.br/wp-json/wp/v2/categories");
                const categoriesData = await categoriesResponse.json();
                const matchedCategories = categoriesData.filter(category =>
                    category.name.toLowerCase().includes(query.toLowerCase())
                );

                // Buscar autores pelo nome
                const authorsResponse = await fetch("https://api.conectasaas.com.br/wp-json/wp/v2/users");
                const authorsData = await authorsResponse.json();
                const matchedAuthors = authorsData.filter(author =>
                    author.name.toLowerCase().includes(query.toLowerCase())
                );

                // Buscar posts dos autores encontrados
                let authorPosts = [];
                for (const author of matchedAuthors) {
                    try {
                        const authorPostsResponse = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/posts?author=${author.id}`);
                        let authorPostsData = await authorPostsResponse.json();

                        // Adicionar imagens aos posts do autor
                        const authorPostsWithImages = await Promise.all(
                            authorPostsData.map(async (post) => {
                                let imageUrl = "/fallback.jpg";
                                if (post.featured_media) {
                                    try {
                                        const mediaResponse = await fetch(
                                            `https://api.conectasaas.com.br/wp-json/wp/v2/media/${post.featured_media}`
                                        );
                                        const mediaData = await mediaResponse.json();
                                        imageUrl = mediaData.source_url;
                                    } catch {
                                        console.error("Erro ao carregar imagem do post.");
                                    }
                                }
                                return { ...post, imageUrl };
                            })
                        );

                        authorPosts = [...authorPosts, ...authorPostsWithImages];
                    } catch {
                        console.error(`Erro ao buscar posts do autor ${author.name}`);
                    }
                }

                // Atualiza os estados
                setPosts([...postsWithImages, ...authorPosts]); // Adiciona os posts dos autores
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
            <SearchTitle>Resultados para "{query}"</SearchTitle>

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
                            <CardCategoria key={category.id} category={category} />
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
                            <CardDestaque key={post.id} post={post} />
                        ))}
                    </ResultsList>
                </section>
            )}
        </SearchContainer>
    );
};

export default SearchResults;
