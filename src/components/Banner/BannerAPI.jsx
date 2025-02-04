// components/Banner/BannerAPI.js

import { useEffect, useState, useRef, memo } from "react";
import CardPrimario from "../cards/CardPrimario/CardPrimario";
import CardSecundario from "../cards/CardSecundario/CardSecundario";
import { BannerContainer, MainPost, SidePosts } from "./Style";
import PHPApi from "../../services/phpApi";

const BannerAPI = memo(() => {
  const [posts, setPosts] = useState([]);
  const isFetched = useRef(false);

  useEffect(() => {
    if (isFetched.current) return;
    isFetched.current = true;

    const fetchPosts = async () => {
      try {
        console.log("🔍 Buscando posts na API PHP");
        const data = await PHPApi.getNews();
        setPosts(data);
      } catch (error) {
        console.error("❌ Erro ao buscar posts na API PHP:", error);
      }
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) return <p>Carregando notícias...</p>;

  return (
    <BannerContainer>
      {/* Post Principal */}
      <MainPost>
        <CardPrimario
          post={posts[0]}
          tamanhoMenor={true}
          // Caso precise exibir alguma informação extra, ajuste conforme os dados retornados pela API PHP
        />
      </MainPost>

      {/* Posts Secundários */}
      <SidePosts>
        {posts.slice(1, 5).map((post) => (
          <CardSecundario key={post.id} post={post} />
        ))}
      </SidePosts>
    </BannerContainer>
  );
});

export default BannerAPI;
