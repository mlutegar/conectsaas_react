import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 8px;
    transition: color 0.4s ease-in-out;
    max-width: 20.625rem;
    height: 9.27rem; /* 🔹 Define altura fixa para os cards pequenos */

    &:hover {
        color: var(--primaria);
    }

    a {
        width: 100%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        max-width: 22.625rem;
        height: auto;
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 9.27rem;
    border-radius: 6px;
    object-fit: cover;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    transition: filter 0.4s ease-in-out;
    background: white;

    ${CardContainer}:hover & {
        filter: brightness(0.5) sepia(1) hue-rotate(-30deg);
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 9.993rem;
    }

    @media (max-width: 480px) {
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
        padding-top: 10px;
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
