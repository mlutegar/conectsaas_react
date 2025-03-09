import { useEffect, useState } from "react";
import CardPrimario from "../cards/CardPrimario/CardPrimario";
import CardDestaque from "../cards/CardDestaque/CardDestaque";
import { Container, ColunaCategoria, CategoriaTitulo, NoticiasSecundarias } from "./Style";
import WordPressApi from "../../services/wordpressApi";

const MostrarNoticiasColunasPreste = ({ categoria1, categoria2, categoria3 }) => {
    // Agora o estado armazenará os objetos completos de cada categoria
    const [noticias, setNoticias] = useState({ categoria1: [], categoria2: [], categoria3: [] });
    const [categoriasData, setCategoriasData] = useState({});

    useEffect(() => {
        const fetchCategoriasData = async () => {
            try {
                // Busca os dados completos (id, name, etc.) de cada categoria pela slug
                const categoriasMapeadas = {
                    categoria1: await WordPressApi.getCategoryBySlug(categoria1),
                    categoria2: await WordPressApi.getCategoryBySlug(categoria2),
                    categoria3: await WordPressApi.getCategoryBySlug(categoria3),
                };

                setCategoriasData({
                    categoria1: categoriasMapeadas.categoria1 || null,
                    categoria2: categoriasMapeadas.categoria2 || null,
                    categoria3: categoriasMapeadas.categoria3 || null,
                });
            } catch (error) {
                console.error("Erro ao buscar dados das categorias:", error);
            }
        };

        fetchCategoriasData();
    }, [categoria1, categoria2, categoria3]);

    useEffect(() => {
        const fetchNoticias = async (categoriaId, key) => {
            if (!categoriaId) return;

            try {
                let posts = await WordPressApi.getPosts({ categories: categoriaId, per_page: 5 });
                posts = await WordPressApi.getPostsWithMedia(posts);
                setNoticias((prev) => ({ ...prev, [key]: posts }));
            } catch (error) {
                console.error(`Erro ao buscar notícias para ${key}:`, error);
            }
        };

        // Utilize o id da categoria armazenada em categoriasData
        if (categoriasData.categoria1?.id) fetchNoticias(categoriasData.categoria1.id, "categoria1");
        if (categoriasData.categoria2?.id) fetchNoticias(categoriasData.categoria2.id, "categoria2");
        if (categoriasData.categoria3?.id) fetchNoticias(categoriasData.categoria3.id, "categoria3");
    }, [categoriasData]);

    const renderColuna = (categoriaKey, titulo) => (
        <ColunaCategoria>
            <CategoriaTitulo>{titulo}</CategoriaTitulo>
            {noticias[categoriaKey].length > 0 && (
                <div className={"conteudo"}>
                    {/* Passa a prop "catName" para o CardPrimario */}
                    <CardPrimario
                        post={noticias[categoriaKey][0]}
                        primeiro={true}
                        catName={categoriasData[categoriaKey]?.name}
                        ocultarCategoria={true}
                        tipo={"categoria"}
                    />
                    <NoticiasSecundarias>
                        {noticias[categoriaKey].slice(1, 5).map((post) => (
                            <CardDestaque key={post.id} post={post} ocultarCategoria={true}/>
                        ))}
                    </NoticiasSecundarias>
                </div>
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
