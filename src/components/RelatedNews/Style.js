import styled from "styled-components";

export const RelatedContainer = styled.div`
    padding: 20px 0;
    margin: 40px 0;
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
    max-width: 15rem;
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