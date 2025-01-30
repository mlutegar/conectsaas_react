import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { PostContainer, PostTitle, PostContent, PostImage, PostInfo, PostWrapper } from "./Style";
import RelatedNews from "../RelatedNews/RelatedNews";

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/posts?slug=${slug}`);
        const data = await response.json();

        if (data.length > 0) {
          const postData = data[0];

          let imageUrl = "/fallback.jpg";
          if (postData.featured_media) {
            try {
              const mediaResponse = await fetch(`https://api.conectasaas.com.br/wp-json/wp/v2/media/${postData.featured_media}`);
              const mediaData = await mediaResponse.json();
              imageUrl = mediaData.source_url;
            } catch {
              console.error("Erro ao carregar imagem do post.");
            }
          }

          setPost({ ...postData, imageUrl });
        }
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar post:", error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <p>Carregando...</p>;
  if (!post) return <p>Post não encontrado.</p>;

  const paragraphs = post.content.rendered.split("</p>");

  return (
      <PostWrapper>
        <PostContainer>
          <PostTitle dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <PostImage src={post.imageUrl} alt={post.title.rendered} />
          <PostInfo>📅 {new Date(post.date).toLocaleDateString()}</PostInfo>
          <PostContent>
            {paragraphs.map((paragraph, index) => (
                <div key={index}>
                  <div dangerouslySetInnerHTML={{ __html: paragraph + "</p>" }} />
                  {index === 1 && paragraphs.length > 2 && <RelatedNews categoryId={post.categories[0]} />}
                </div>
            ))}
          </PostContent>
        </PostContainer>

        {/* Adiciona a Sidebar ao lado do Post */}
        <Sidebar />
      </PostWrapper>
  );
};

export default PostPage;
