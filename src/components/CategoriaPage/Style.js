import styled from "styled-components";

export const CategoryContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    
    h1 {
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 20px;
    }
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

export const NewsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;