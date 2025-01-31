import styled from "styled-components";

export const BannerContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 20px;
  max-width: 1440px;
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Apenas uma coluna */
    grid-template-rows: auto auto; /* Primeira linha para o principal, segunda para os secundários */
  }
`;

export const MainPost = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
  }
`;

export const SidePosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    order: 2; /* Força os posts secundários a ficarem abaixo */
  }
`;

export const PostItem = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  h3 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 5px;
  }
`;

export const CategoryTag = styled.span`
  background: black;
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 4px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const PostInfo = styled.p`
  font-size: 12px;
  color: gray;
  margin-top: 5px;
`;
