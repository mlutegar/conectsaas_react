import styled from "styled-components";

export const CategoriaSecaoStyle = styled.div`
    background: ${(props) => (props.fundoCinza ? "#222" : "transparent")};
    color: ${(props) => (props.fundoCinza ? "white" : "black")};
    padding: ${(props) => (props.fundoCinza ? "40px 15px" : "0 15px")};
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
    transition: background 0.4s ease-in-out, color 0.4s ease-in-out;

    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    color: white;
    width: 100%;
`;

export const ContainerNoticiasSecundarias = styled.div`
    max-width: 29.1875rem;
    width: calc(50% - 10px); /* Divide o espaço igualmente entre as colunas */
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const CategoriaTitle = styled.h2`
    color: ${(props) => (props.fundoCinza ? "white" : "black")};
    font-family: "Didact Gothic";
    font-size: 1.5rem;
    font-weight: 400;
    text-transform: uppercase;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: ${(props) => (props.fundoCinza ? "#ffcc00" : "#990A04")};
    }
`;

export const CategoriaTitleDiv = styled.div`
    border-bottom: 1px solid #ccc;
    width: 100%;
    margin-bottom: 19.920px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: border-bottom 0.3s ease-in-out;

    @media (max-width: 768px) {
        max-width: 90vw;
        overflow-x: hidden;
        margin: 19.920px 20px;
    }

    &:hover {
        border-bottom: 1px solid ${(props) => (props.fundoCinza ? "#ffcc00" : "#990A04")};
    }

    .join {
        cursor: pointer;
        transition: transform 0.3s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const NoticiasList = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 20px;
    overflow-x: auto;
    padding-bottom: 10px;
    opacity: 0;
    animation: fadeIn 0.6s ease-in-out forwards;

    @media (max-width: 768px) {
        flex-direction: column;
        flex-wrap: wrap;
        overflow-x: hidden;
    }

    &::-webkit-scrollbar {
        height: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
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
