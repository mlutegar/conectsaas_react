import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Container, MaisNoticiasStyle, MaisNoticiasTitle, NoticiasList} from "./Style";
import CardDestaque from "../cards/CardDestaque/CardDestaque";

const MaisNoticias = ({categoryId}) => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/posts?categories=${categoryId}&per_page=5`);
                const data = await response.json();

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
                        <CardDestaque key={post.id} post={post} modoEscuro={true}/>
                    ))}
                </NoticiasList>
            </Container>
        </MaisNoticiasStyle>
    );
};

export default MaisNoticias;