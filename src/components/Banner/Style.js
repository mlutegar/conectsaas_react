import styled from "styled-components";

export const BannerContainer = styled.section`
    display: grid;
    grid-template-areas: "principal principal secundarios secundarios";
    gap: 20px;
    padding: 20px 0;
    max-width: 1440px;
    margin: auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-areas:
      "principal"
      "secundarios";
        padding: 0;
    }
`;

export const MainPost = styled.div`
    grid-area: principal;
    width: 100%;
    max-width: 44.9375rem;

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
    
    @media (max-width: 768px) {
        img {
            border-radius: 0;
        }
    }
`;

export const SidePosts = styled.div`
    grid-area: secundarios;
    display: grid;
    grid-template-columns: 1fr 1fr; /* 2 colunas */
    grid-template-rows: auto auto; /* 2 linhas */
    gap: 3px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Apenas 1 coluna no mobile */
        grid-template-rows: auto;
        padding: 0 20px;
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
