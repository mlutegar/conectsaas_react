import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1440px;
    margin: auto;
    padding: 0 20px;
    opacity: 0;
    animation: fadeIn 0.6s ease-in-out forwards;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }

    @media (max-width: 768px) {
        padding: 0;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const ColunaCategoria = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
`;

export const CategoriaTitulo = styled.h2`
    color: #000;
    font-family: "Didact Gothic";
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 0;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #990A04;
    }

    @media (max-width: 768px) {
        margin-left: 20px;
        margin-top: 0;
    }
`;

export const NoticiasSecundarias = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
    padding-top: 6rem;

    &:hover {
        opacity: 0.9;
    }

    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;
