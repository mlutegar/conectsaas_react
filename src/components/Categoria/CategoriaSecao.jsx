import {memo, useEffect, useState} from "react";
import {
    CategoriaSecaoStyle,
    CategoriaTitle,
    CategoriaTitleDiv,
    Container,
    ContainerNoticiasSecundarias,
    NoticiasListDesktop,
    NoticiasListMobile
} from "./Style";
import CardPrimario from "../cards/CardPrimario/CardPrimario";
import WordPressApi from "../../services/wordpressApi";
import CardSecundario from "../cards/CardSecundario/CardSecundario";
import {Link} from "react-router-dom";
import {SvgJoin} from "../Svgs/Svgs"; // Se estiver usando React Router

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

                <CategoriaTitleDiv>
                    <CategoriaTitle fundoCinza={fundoCinza}>
                        <Link to={`/categoria/${categoriaNome}`} style={{textDecoration: 'none', color: 'inherit'}}>
                            {categoriaNome.toUpperCase()}
                        </Link>
                    </CategoriaTitle>
                    <div className={"join"}>
                        <SvgJoin/>
                    </div>
                </CategoriaTitleDiv>

                <NoticiasListDesktop>
                    {noticias.map((post, index) =>
                        index === 0 ? (
                            <CardPrimario
                                key={post.id}
                                post={post}
                                modoEscuro={fundoCinza}
                                primeiro={true}
                                ocultarCategoria={true}
                                tipo={"categoria"}
                                className="noticia-grande"
                            />
                        ) : (
                            <ContainerNoticiasSecundarias>
                                <CardSecundario
                                    key={post.id}
                                    post={post}
                                    modoEscuro={fundoCinza}
                                    ocultarCategoria={true}
                                    className="noticia-secundaria"
                                    tipo={"categoria"}
                                />
                            </ContainerNoticiasSecundarias>
                        )
                    )}
                </NoticiasListDesktop>

                <NoticiasListMobile>
                    {noticias.map((post, index) =>
                        index === 0 ? (
                            <CardPrimario
                                key={post.id}
                                post={post}
                                modoEscuro={fundoCinza}
                                primeiro={true}
                                ocultarCategoria={true}
                                tipo={"categoria"}
                                className="noticia-grande"
                            />
                        ) : null )}
                    <ContainerNoticiasSecundarias>
                        {noticias.map((post, index) =>
                            index !== 0 ? (
                                <CardSecundario
                                    key={post.id}
                                    post={post}
                                    modoEscuro={fundoCinza}
                                    ocultarCategoria={true}
                                    className="noticia-secundaria"
                                    tipo={"categoria"}
                                />
                            ) : null )}
                    </ContainerNoticiasSecundarias>
                </NoticiasListMobile>
            </Container>
        </CategoriaSecaoStyle>
    );
});

export default CategoriaSecao;
