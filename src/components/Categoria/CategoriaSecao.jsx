import {memo, useEffect, useState} from "react";
import {CategoriaSecaoStyle, CategoriaTitle, Container, NoticiasList} from "./Style";
import CardPrimario from "../cards/CardPrimario/CardPrimario";

const CategoriaSecao = memo(({categoriaNome, fundoCinza = false}) => {
    const [noticias, setNoticias] = useState([]);
    const [categoriaId, setCategoriaId] = useState(null);

    useEffect(() => {
        const fetchCategoriaId = async () => {
            try {
                const response = await fetch("https://api.conectasaas.com.br/wp-json/wp/v2/categories");
                const categories = await response.json();

                if (Array.isArray(categories)) {
                    const categoriaEncontrada = categories.find(cat =>
                        cat.name.toLowerCase() === categoriaNome.toLowerCase()
                    );

                    if (categoriaEncontrada) {
                        setCategoriaId(categoriaEncontrada.id);
                    } else {
                        console.error("CategoriaSecao não encontrada.");
                    }
                }
            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
            }
        };

        if (categoriaNome) {
            fetchCategoriaId();
        }
    }, [categoriaNome]);

    useEffect(() => {
        const fetchNoticias = async () => {
            if (!categoriaId) return;

            try {
                const response = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/posts?categories=${categoriaId}&per_page=3`);
                const data = await response.json();

                if (!Array.isArray(data)) {
                    console.error("A API retornou um formato inesperado:", data);
                    return;
                }

                // Adiciona a URL da imagem a cada post
                const noticiasComImagens = await Promise.all(
                    data.map(async (post) => {
                        let imageUrl = "/fallback.jpg";
                        if (post.featured_media) {
                            try {
                                const mediaResponse = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/media/${post.featured_media}`);
                                const mediaData = await mediaResponse.json();
                                imageUrl = mediaData.source_url;
                            } catch {
                                console.error("Erro ao carregar imagem do post.");
                            }
                        }
                        return {...post, imageUrl};
                    })
                );

                setNoticias(noticiasComImagens);
            } catch (error) {
                console.error("Erro ao buscar notícias da categoria:", error);
            }
        };

        fetchNoticias();
    }, [categoriaId]);

    if (noticias.length === 0) return null;

    return (
        <CategoriaSecaoStyle fundoCinza={fundoCinza}>
            <Container>
                <CategoriaTitle fundoCinza={fundoCinza}>{categoriaNome.toUpperCase()}</CategoriaTitle>
                <NoticiasList>
                    {noticias.map((post) => (
                        <CardPrimario key={post.id} post={post} modoEscuro={fundoCinza} />
                    ))}
                </NoticiasList>
            </Container>
        </CategoriaSecaoStyle>
    );
});

export default CategoriaSecao;
