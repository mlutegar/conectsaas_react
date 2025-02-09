import styled from "styled-components";

export const SobreNosContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 3rem 2rem;
    max-width: 1440px;
    margin: 0 auto;
`;

export const Titulo = styled.h1`
    flex-shrink: 0;
    color: #000;
    font-family: "Libre Franklin";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const Texto = styled.p`
    color: #000;
    font-family: "Libre Franklin";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 2rem;
`;

export const FormularioContainer = styled.form`
    background: #F5F5F5;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`;

export const InputContainer = styled.div`
    display: flex;
    gap: 3rem;

    div {
        flex: 1;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Label = styled.label`
    color: #000;
    font-family: "Libre Franklin";
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-bottom: 0.3rem;
    display: block;
    text-align: left;
`;

export const Input = styled.input`
    border: 0.5px solid #000;
    background: #FFF;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    font-family: "Libre Franklin";

    &[as="textarea"] {
        height: 7rem;
        resize: none;
    }
`;

export const BotaoEnviar = styled.button`
    width: 17.3125rem;
    height: 2.4375rem;
    flex-shrink: 0;
    background: #990A04;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    margin-top: 1rem;
    align-self: center;

    &:hover {
        background: #ba0e08;
    }
`;
