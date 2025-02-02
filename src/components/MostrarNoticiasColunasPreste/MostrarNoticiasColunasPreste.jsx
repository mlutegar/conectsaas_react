import {useEffect, useState} from "react";
import CardPrimario from "../cards/CardPrimario/CardPrimario";
import CardDestaque from "../cards/CardDestaque/CardDestaque";
import {Container, ColunaCategoria, CategoriaTitulo, NoticiasSecundarias} from "./Style";

const MostrarNoticiasColunasPreste = ({categoria1, categoria2, categoria3}) => {
    const [noticias, setNoticias] = useState({categoria1: [], categoria2: [], categoria3: []});
    const [categoriasIds, setCategoriasIds] = useState({});

    useEffect(() => {
        const fetchCategoriasIds = async () => {
            try {
                const response = await fetch("https://api.conectasaas.com.br/wp-json/wp/v2/categories");
                const categories = await response.json();

                if (Array.isArray(categories)) {
                    const categoriasMapeadas = {
                        categoria1: categories.find(cat => cat.name.toLowerCase() === categoria1.toLowerCase())?.id || null,
                        categoria2: categories.find(cat => cat.name.toLowerCase() === categoria2.toLowerCase())?.id || null,
                        categoria3: categories.find(cat => cat.name.toLowerCase() === categoria3.toLowerCase())?.id || null
                    };
                    setCategoriasIds(categoriasMapeadas);
                }
            } catch (error) {
                console.error("Erro ao buscar IDs das categorias:", error);
            }
        };

        fetchCategoriasIds();
    }, [categoria1, categoria2, categoria3]);

    useEffect(() => {
        const fetchNoticias = async (categoriaId, key) => {
            if (!categoriaId) return;

            try {
                const response = await fetch(
                    `https://api.conectasaas.com.br/wp-json/wp/v2/posts?categories=${categoriaId}&per_page=5`
                );
                const data = await response.json();

                if (!Array.isArray(data)) {
                    console.error("A API retornou um formato inesperado:", data);
                    return;
                }

                const noticiasComImagens = await Promise.all(
                    data.map(async (post) => {
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
                        return {...post, imageUrl};
                    })
                );

                setNoticias((prev) => ({...prev, [key]: noticiasComImagens}));
            } catch (error) {
                console.error(`Erro ao buscar notícias para ${key}:`, error);
            }
        };

        if (categoriasIds.categoria1) fetchNoticias(categoriasIds.categoria1, "categoria1");
        if (categoriasIds.categoria2) fetchNoticias(categoriasIds.categoria2, "categoria2");
        if (categoriasIds.categoria3) fetchNoticias(categoriasIds.categoria3, "categoria3");
    }, [categoriasIds]);

    const renderColuna = (categoriaKey, titulo) => (
        <ColunaCategoria>
            <CategoriaTitulo>{titulo}</CategoriaTitulo>
            {noticias[categoriaKey].length > 0 && (
                <>
                    <CardPrimario post={noticias[categoriaKey][0]} primeiro={true}/>
                    <NoticiasSecundarias>
                        {noticias[categoriaKey].slice(1, 5).map((post) => (
                            <CardDestaque key={post.id} post={post}/>
                        ))}
                    </NoticiasSecundarias>
                </>
            )}
        </ColunaCategoria>
    );

    return (
        <Container>
            {renderColuna("categoria1", categoria1)}
            {renderColuna("categoria2", categoria2)}
            {renderColuna("categoria3", categoria3)}
        </Container>
    );
};

export default MostrarNoticiasColunasPreste;
