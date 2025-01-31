import styled from "styled-components";

export const CategoriaContainer = styled.div`
    background: ${(props) => (props.fundoCinza ? "#222" : "transparent")};
    color: ${(props) => (props.fundoCinza ? "white" : "black")};
    padding: 30px;
    border-radius: 8px;
    margin-top: 40px;
`;

export const CategoriaTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
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