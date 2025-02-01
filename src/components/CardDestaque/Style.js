import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column; /* Mantém a imagem sempre em cima */
    align-items: flex-start;
    border-radius: 8px;
    overflow: hidden;
    padding: 10px;
`;

export const CardImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 6px;
    object-fit: cover;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const CardTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: ${({ modoEscuro }) => (modoEscuro ? "white" : "black")};
    text-decoration: none;
    line-height: 1.2;
    margin-bottom: 5px;

    &:hover {
        text-decoration: underline;
    }
`;

export const CardExcerpt = styled.p`
    font-size: 14px;
    color: ${({ modoEscuro }) => (modoEscuro ? "#ccc" : "#444")};
    margin-bottom: 8px;
    line-height: 1.4;
`;

export const CardInfo = styled.p`
    font-size: 12px;
    color: ${({ modoEscuro }) => (modoEscuro ? "#ddd" : "var(--primaria)")};
    font-weight: bold;
    margin-top: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
`;
