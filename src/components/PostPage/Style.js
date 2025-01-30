import styled from "styled-components";

export const PostContainer = styled.div`
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const PostTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
`;

export const PostImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
`;

export const PostInfo = styled.p`
    font-size: 14px;
    color: gray;
    text-align: center;
    margin-bottom: 20px;
`;

export const PostContent = styled.div`
    font-size: 16px;
    line-height: 1.6;

    img {
        max-width: 100%;
        height: auto;
        margin: 20px 0;
    }

    p {
        margin-bottom: 10px;
    }
`;

export const PostWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    margin: 40px auto;
    padding: 20px;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
