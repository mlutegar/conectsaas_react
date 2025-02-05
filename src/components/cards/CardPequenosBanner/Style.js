import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column; /* Mantém a imagem em cima */
    align-items: flex-start;
    border-radius: 8px;
    overflow: hidden;
    transition: color 0.4s ease-in-out;

    &:hover {
        color: var(--primaria);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const CardImage = styled.img`
    width: 125%;
    height: 9.27rem;
    border-radius: 6px;
    object-fit: cover;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    transition: filter 0.4s ease-in-out;

    ${CardContainer}:hover & {
        filter: brightness(0.5) sepia(1) hue-rotate(-30deg);
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 480px) {
        width: 20.5rem;
        height: 10.6875rem;
        flex-shrink: 0;
        border-radius: 0.625rem;
        box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0 20px;
`;

export const CardCategory = styled.p`
    background: ${({ modoEscuro }) => (modoEscuro ? "#444" : "#333")};
    color: ${({ modoEscuro }) => (modoEscuro ? "white" : "white")};
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    padding: 4px 8px;
    display: inline-block;
    border-radius: 4px;
    margin-bottom: 5px;
    transition: color 0.4s ease-in-out;

    ${CardContainer}:hover & {
        color: var(--primaria);
    }
`;

export const CardTitle = styled.div`
    color: #000;
    font-family: "Libre Franklin";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${({ modoEscuro }) => (modoEscuro ? "white" : "black")};
    text-decoration: none;
    transition: color 0.4s ease-in-out;

    ${CardContainer}:hover & {
        color: var(--primaria);
    }

    &:hover {
        text-decoration: underline;
    }

    @media (max-width: 480px) {
        color: #000;
        font-family: "Libre Franklin";
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

export const CardInfo = styled.p`
    color: ${({ modoEscuro }) => (modoEscuro ? "#ddd" : "var(--primaria)")};
    margin-top: 3px;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: color 0.4s ease-in-out;

    font-family: "Libre Franklin";
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    ${CardContainer}:hover & {
        color: var(--primaria);
    }

    @media (max-width: 480px) {
        display: none;
    }
`;
