import styled from "styled-components";

export const RelatedContainer = styled.div`
    background: #fff;
    padding: 20px;
    margin: 40px 0;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: left;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
`;

export const RelatedTitle = styled.h3`
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase; /* Deixa em caixa alta */
    margin-bottom: 20px;
`;

export const RelatedList = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const RelatedItem = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    width: 30%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;


export const RelatedImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
`;

export const RelatedContent = styled.div`
    flex: 1;
`;

export const RelatedCategory = styled.p`
    font-size: 12px;
    color: #888;
    margin-top: 5px;
    font-weight: bold;
    text-transform: uppercase;
`;