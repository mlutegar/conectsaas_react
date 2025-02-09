import {useEffect, useState} from "react";
import {Container, MaisNoticiasStyle, MaisNoticiasTitle, NoticiasList} from "./Style";
import CardTextoLateral from "../cards/CardTextoLateral/CardTextoLateral";
import WordPressApi from "../../services/wordpressApi";
import {Conteudo} from "../../Style";

const MaisNoticias = ({categoryId}) => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                let posts = await WordPressApi.getPosts({categories: categoryId, per_page: 5});
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
            <Conteudo>
                <Container>
                    <MaisNoticiasTitle>MAIS NOTÍCIAS</MaisNoticiasTitle>
                    <NoticiasList>
                        {noticias.map((post) => (
                            <CardTextoLateral key={post.id} post={post} modoEscuro={true}/>
                        ))}
                    </NoticiasList>
                </Container>
            </Conteudo>
        </MaisNoticiasStyle>
    );
};

export default MaisNoticias;
