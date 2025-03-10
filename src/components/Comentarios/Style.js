import styled from "styled-components";

export const ComentariosContainer = styled.div`
    padding: 2rem;
    background: #F5F5F5;
    margin: 2rem auto;
`;

export const Conteudo = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    
    h2{
        color: #000;
        font-family: "Libre Franklin";
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

export const Formulario = styled.form`
    background: #FFF;
    max-width: 87rem;
    height: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 4.5rem;
    
    .form-container {
        display: flex;
        gap: 2rem;
    }
    
    .inputs{
        width: 100%;
    }
    
    .mensagem-container{
        width: 100%;
    }
    
    @media (max-width: 768px) {
        .form-container {
            flex-direction: column;
            gap: 0;
        }
    }
`;

export const Input = styled.input`
    border: 0.5px solid #000;
    background: #FFF;
    width: 100%;
    height: 4.0625rem;
    padding: 0.5rem;
    
    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const TextArea = styled.textarea`
    border: 0.5px solid #000;
    background: #FFF;
    width: 100%;
    height: 8rem;
    padding: 0.5rem;
    resize: none;
    
    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const Label = styled.label`
    color: #000;
    font-size: 0.75rem;
`;

export const BotaoEnviar = styled.button`
    width: 17.3125rem;
    height: 2.4375rem;
    background: #990A04;
    color: white;
    border: none;
    cursor: pointer;
    align-self: flex-end;
`;

export const Comentario = styled.div`
    padding: 1rem;
    border-bottom: 1px solid #ddd;
`;

export const NomeTempo = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
`;

export const Mensagem = styled.p`
    font-size: 0.6875rem;
`;

export const ComentariosList = styled.div`
    margin-top: 1.5rem;
`;

export const FormContainer = styled.div`
    display: flex;
    gap: 1rem;

    .inputs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex: 1;
    }

    .mensagem-container {
        flex: 2;
        position: relative;
    }

    .contador {
        position: absolute;
        bottom: 0.5rem;
        right: 1rem;
        font-size: 0.75rem;
        color: #444;
    }
`;
