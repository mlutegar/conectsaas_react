import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1440px;
    margin: auto;
    padding: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

export const ColunaCategoria = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const CategoriaTitulo = styled.h2`
    color: #000;
    font-family: "Didact Gothic";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
`;