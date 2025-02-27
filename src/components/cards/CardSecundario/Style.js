import styled from "styled-components";

export const CardContainer = styled.div`
    height: 22rem;
    display: flex;
    flex-direction: column; /* Mantém a imagem em cima */
    align-items: flex-start;
    border-radius: 8px;
    overflow: hidden;
    transition: color 0.4s ease-in-out;

    &.noticia-grande {
        max-width: 100%; /* Garante que o CardPrimario tenha o mesmo tamanho da soma das duas colunas */
    }

    &.noticia-secundaria {
        flex: 1; /* Faz com que os cards secundários ocupem metade do espaço */
    }
    
    a{
        overflow: hidden;
        width: 100%;
    }

    @media (max-width: 768px) {
        padding: 0 20px;
    }

    &:hover {
        color: var(--primaria);
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 6px;
    object-fit: cover;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    transition: filter 0.4s ease-in-out;

    ${CardContainer}:hover & {
        filter: brightness(0.5) sepia(1) hue-rotate(-30deg);
    }
    
    @media (max-width: 768px) {
        height: 9.993rem;
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
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
    font-size: 12px;
    color: ${({ modoEscuro }) => (modoEscuro ? "#ddd" : "var(--primaria)")};
    font-weight: bold;
    margin-top: 3px;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: color 0.4s ease-in-out;

    ${CardContainer}:hover & {
        color: var(--primaria);
    }
`;
