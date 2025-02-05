import styled from "styled-components";

export const CardCategory = styled.div`
    color: ${({ modoEscuro }) => (modoEscuro ? "#fff" : "white")};
    background-color: ${({ modoEscuro }) =>
            modoEscuro ? "var(--primaria)" : "var(--secundaria)"};
    text-transform: uppercase;
    margin: 10px 0;
    border-radius: 0;
    font-family: "Didact Gothic", serif;
    font-size: ${({ modoPequeno }) => (modoPequeno ? "0.875rem" : "1.25rem")};
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    width: ${({ modoPequeno }) => (modoPequeno ? "5.0625rem" : "6.85369rem")};
    height: ${({ modoPequeno }) => (modoPequeno ? "1.20963rem" : "1.63763rem")};
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    text-align: center;
    transition: background-color 0.3s ease, filter 0.3s ease;

    &:hover {
        background-color: ${({ modoEscuro }) =>
                modoEscuro ? "var(--secundaria)" : "var(--primaria)"};
        cursor: pointer;
    }
    
    @media (max-width: 768px) {
        font-size: 1.25rem;
        width: 6.85369rem;
        height: 1.63763rem;
    }

`;
