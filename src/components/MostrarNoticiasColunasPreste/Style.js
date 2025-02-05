import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1440px;
    margin: auto;
    padding: 0 20px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const ColunaCategoria = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 2rem;
`;

export const CategoriaTitulo = styled.h2`
    color: #000;
    font-family: "Didact Gothic";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 4.75rem;

    @media (max-width: 768px) {
        margin-left: 20px;
        margin-top: 0;
    }
`;

export const NoticiasSecundarias = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;