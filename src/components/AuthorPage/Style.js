import styled from "styled-components";

export const AuthorContainer = styled.div`
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

export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin-bottom: 40px;
    background: #333333;
    height: 12rem;
    border-radius: 10px;

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 10px;
    }

    h1 {
        color: #fff;
        font-size: 1.8rem;
        font-weight: bold;
    }

    p {
        font-size: 1rem;
        color: #666;
        max-width: 600px;
        margin: 10px auto 0;
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