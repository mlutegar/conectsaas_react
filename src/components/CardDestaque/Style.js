import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row; /* Imagem à esquerda, texto à direita */
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    padding: 10px;
    transition: all 0.4s ease-in-out;
    gap: 15px;

    p {
        margin: 0;
        display: inline;
    }

    &:hover {
        a, h3, p, svg {
            color: var(--primaria) !important; /* Apenas o texto e ícones ficam vermelhos */
        }
    }

    &:hover img {
        filter: hue-rotate(340deg) saturate(150%) brightness(80%);
        transition: filter 0.4s ease-in-out;
    }
`;

export const CardImage = styled.img`
    width: 120px;
    height: 80px;
    border-radius: 6px;
    object-fit: cover;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    transition: filter 0.4s ease-in-out;
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
    transition: color 0.4s ease-in-out;

    ${CardContainer}:hover & {
        color: var(--primaria);
    }

    &:hover {
        text-decoration: underline;
    }
`;

export const CardExcerpt = styled.p`
    font-size: 14px;
    color: ${({ modoEscuro }) => (modoEscuro ? "#ccc" : "#444")};
    margin-bottom: 8px;
    line-height: 1.4;
    transition: color 0.4s ease-in-out;

    ${CardContainer}:hover & {
        color: var(--primaria);
    }
`;

export const CardInfo = styled.p`
    font-size: 12px;
    color: ${({ modoEscuro }) => (modoEscuro ? "#ddd" : "var(--primaria)")};
    font-weight: bold;
    margin-top: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: color 0.4s ease-in-out;

    ${CardContainer}:hover & {
        color: var(--primaria);
    }
`;
