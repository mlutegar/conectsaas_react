import { useEffect, useState } from "react";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://api.conectasaas.com.br/wp-json/wp/v2/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error("Erro ao buscar posts:", error));
    }, []);

    return (
        <div>
            <h1>Últimas Notícias</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        <a href={`/post/${post.slug}`}>Leia mais</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
