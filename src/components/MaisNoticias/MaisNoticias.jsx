import { useEffect, useState } from "react";
import { Container, MaisNoticiasStyle, MaisNoticiasTitle, NoticiasList } from "./Style";
import CardDestaque from "../cards/CardDestaque/CardDestaque";
import WordPressApi from "../../services/wordpressApi";

const MaisNoticias = ({ categoryId }) => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                let posts = await WordPressApi.getPosts({ categories: categoryId, per_page: 5 });
                posts = await WordPressApi.getPostsWithMedia(posts);
                setNoticias(posts);
            } catch (error) {
                console.error("Erro ao buscar mais notícias:", error);
            }
        };

        if (categoryId) {
            fetchNoticias();
        }
    }, [categoryId]);

    if (noticias.length === 0) return null;

    return (
        <MaisNoticiasStyle>
            <Container>
                <MaisNoticiasTitle>MAIS NOTÍCIAS</MaisNoticiasTitle>
                <NoticiasList>
                    {noticias.map((post) => (
                        <CardDestaque key={post.id} post={post} modoEscuro={true} />
                    ))}
                </NoticiasList>
            </Container>
        </MaisNoticiasStyle>
    );
};

export default MaisNoticias;
