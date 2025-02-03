import styled from "styled-components";

export const CardContainer = styled.div`
    border-radius: ${({ primeiro }) => (primeiro ? "0" : "8px")};
    overflow: hidden;
    transition: color 0.4s ease-in-out;

    &:hover {
        color: var(--primaria);
    }
`;

export const CardImage = styled.img`
    width: 100%;
    display: block;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
    transition: filter 0.4s ease-in-out;
    border-radius: 0.625rem;
    
    @media (max-width: 768px) {
        border-radius: ${({ primeiro }) => (primeiro ? "0" : "0.625rem")};
    }

    ${CardContainer}:hover & {
        filter: brightness(0.5) sepia(1) hue-rotate(-30deg);
    }
`;

export const CardCategory = styled.p`
    color: ${({ modoEscuro }) => (modoEscuro ? "#fff" : "white")};
    background-color: ${({ modoEscuro }) => (modoEscuro ? "var(--primaria)" : "var(--secundaria)")};
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 10px;
    display: inline-block;
    border-radius: 4px;
    margin: 10px 0;
`;

export const CardTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
    color: ${({ modoEscuro }) => (modoEscuro ? "white" : "black")};
    text-decoration: none;
    transition: color 0.4s ease-in-out;

    ${CardContainer}:hover & {
        color: var(--primaria);
    }

    &:hover {
        text-decoration: underline;
    }
`;


export const CardInfo = styled.p`
    font-size: 14px;
    color: ${({ modoEscuro }) => (modoEscuro ? "#ddd" : "var(--primaria)")};
    font-weight: bold;
    margin-top: 5px;
    transition: color 0.4s ease-in-out;

    ${CardContainer}:hover & {
        color: var(--primaria);
    }
`;

export const Conteudo = styled.div`
    
    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;