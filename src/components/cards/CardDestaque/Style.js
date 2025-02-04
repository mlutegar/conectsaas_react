import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row; /* Imagem à esquerda, texto à direita */
    align-items: flex-start;
    border-radius: 8px;
    overflow: hidden;
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
        filter: brightness(0.5) sepia(1) hue-rotate(-30deg);
        transition: filter 0.4s ease-in-out;
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const CardImage = styled.img`
    width: 12.82094rem;
    height: 7.74419rem;
    
    border-radius: 6px;
    object-fit: cover;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    transition: filter 0.4s ease-in-out;
    
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
`;

export const CardTitle = styled.h3`
    color: ${({ modoEscuro }) => (modoEscuro ? "white" : "black")};
    text-decoration: none;
    margin-bottom: 5px;
    transition: color 0.4s ease-in-out;
    font-family: "Libre Franklin";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

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

export const CardExcerpt = styled.div`
    color: ${({ modoEscuro }) => (modoEscuro ? "#ccc" : "#444")};
    margin-bottom: 8px;
    line-height: 1.4;
    transition: color 0.4s ease-in-out;
    font-family: "Libre Franklin";
    font-size: 0.75rem;
    font-style: normal;

    ${CardContainer}:hover & {
        color: var(--primaria);
    }
    
    @media (max-width: 480px) {
        display: none;
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

    @media (max-width: 480px) {
        display: none;
    }
`;
