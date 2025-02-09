import {memo, useEffect, useState} from "react";
import {CategoriaSecaoStyle, CategoriaTitle, Container, ContainerNoticiasSecundarias, NoticiasList} from "./Style";
import CardPrimario from "../cards/CardPrimario/CardPrimario";
import WordPressApi from "../../services/wordpressApi";
import CardSecundario from "../cards/CardSecundario/CardSecundario";

const CategoriaSecao = memo(({categoriaNome, fundoCinza = false}) => {
    const [noticias, setNoticias] = useState([]);
    const [categoriaId, setCategoriaId] = useState(null);

    useEffect(() => {
        const fetchCategoriaId = async () => {
            try {
                const categoria = await WordPressApi.getCategoryBySlug(categoriaNome);
                if (categoria) {
                    setCategoriaId(categoria.id);
                } else {
                    console.error("CategoriaSecao não encontrada.");
                }
            } catch (error) {
                console.error("Erro ao buscar categoria:", error);
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
                let posts = await WordPressApi.getPosts({categories: categoriaId, per_page: 3});
                posts = await WordPressApi.getPostsWithMedia(posts);
                setNoticias(posts);
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
                    {noticias.map((post, index) =>
                        index === 0 ? (
                            <CardPrimario key={post.id} post={post} modoEscuro={fundoCinza} primeiro={true} ocultarCategoria={true} tipo={"categoria"}/>
                        ) : (
                            <ContainerNoticiasSecundarias>
                                <CardSecundario key={post.id} post={post} modoEscuro={fundoCinza} ocultarCategoria={true}/>
                            </ContainerNoticiasSecundarias>
                        )
                    )}
                </NoticiasList>
            </Container>
        </CategoriaSecaoStyle>
    );
});

export default CategoriaSecao;
