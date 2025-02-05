import styled from "styled-components";

export const CategoriaSecaoStyle = styled.div`
    background: ${(props) => (props.fundoCinza ? "#222" : "transparent")};
    color: ${(props) => (props.fundoCinza ? "white" : "black")};
    padding: 30px;
    margin-top: 40px;

    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    color: white;
`;

export const ContainerNoticiasSecundarias = styled.div`
    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

export const CategoriaTitle = styled.h2`
    color: ${(props) => (props.fundoCinza ? "white" : "black")};
    font-family: "Didact Gothic";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    
    @media (max-width: 768px) {
        padding: 0 20px;
    }
`;

export const NoticiasList = styled.div`
    display: flex;
    flex-wrap: nowrap; /* No desktop, mantém as notícias lado a lado */
    gap: 20px;
    overflow-x: auto; /* Se necessário, permite rolagem horizontal */
    padding-bottom: 10px;

    /* No mobile, empilha os cards verticalmente */
    @media (max-width: 768px) {
        flex-direction: column;
        flex-wrap: wrap; /* Permite quebra de linha */
        overflow-x: hidden; /* Remove rolagem horizontal */
    }

    &::-webkit-scrollbar {
        height: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }
`;