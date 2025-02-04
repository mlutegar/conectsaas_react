import styled from "styled-components";

export const CategoryContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

export const Titulo = styled.div`
    text-align: left;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    padding: 20px 20px 0;
`;

export const BannerContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;

    .side-posts {
        display: flex;
        flex-direction: column;
        gap: 15px;
        flex: 1;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
