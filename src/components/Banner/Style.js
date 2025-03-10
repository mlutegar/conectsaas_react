import styled from "styled-components";

export const BannerContainer = styled.section`
    padding: 20px 15px;
    max-width: 1440px;
    margin: 40px auto 0;

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const BannerMobile = styled.div`
    display: none;
    height: 26rem;

    span.swiper-pagination-bullet.swiper-pagination-bullet-active {
        background: #8b0000;
    }

    @media (max-width: 768px) {
        display: flex;
        margin-bottom: 1rem;
    }
`;

export const BannerDesktop = styled.div`
    display: grid;
    grid-template-areas: "principal principal secundarios secundarios";
    gap: 2rem;
    
    @media (max-width: 768px) {
        display: none;
        grid-template-columns: 1fr;
        grid-template-areas:
      "principal"
      "secundarios";
    }
`;

export const MainPost = styled.div`
    grid-area: principal;
    width: 100%;
    max-width: 44.9375rem;
    display: flex;
    flex-direction: column;

    /* Ajusta a altura para ser igual à soma dos dois cards pequenos */
    min-height: calc((16rem * 2) + 3px); /* 9.27rem é a altura dos cards pequenos + gap */

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }

    h2 {
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
    }

    @media (max-width: 768px) {
        min-height: auto; /* Remove a restrição no mobile */
        img {
            border-radius: 0;
            height: 15.625rem;
        }
    }
`;


export const SidePosts = styled.div`
    grid-area: secundarios;
    display: grid;
    grid-template-columns: 1fr 1fr; /* 2 colunas */
    grid-template-rows: 1fr 1fr; /* 2 linhas */
    gap: 3px 17px;

    /* Faz com que os cards pequenos se alinhem corretamente */
    height: calc((16rem * 2) + 3px);

    @media (max-width: 768px) {
        grid-template-columns: 1fr; /* Apenas 1 coluna no mobile */
        grid-template-rows: auto;
        padding: 0 20px;
        height: auto;
        gap: 3rem 17px;
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
