import styled from "styled-components";

export const NewsletterStyle = styled.div`
    background: ${(props) => (props.darkMode ? "transparent" : "#333")};
    padding: 30px;
    text-align: center;
    margin-top: 60px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-width: 1300px;
    margin: 0 auto;
    background: ${(props) => (props.darkMode ? "#333" : "#f8f8f8")};
    color: ${(props) => (props.darkMode ? "white" : "black")};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 30px 0;

    h2 {
        width: 80%;
        color: ${(props) => (props.darkMode ? "white" : "black")};
    }
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    width: 100%;

    .input-container {
        display: flex;
        gap: 20px;
        width: 65%;
    }

    @media (max-width: 768px) {
        padding: 20px;


        .input-container {
            flex-direction: column;
            gap: 10px;
            width: 100%;
            align-items: center;
        }
    }
`;

export const InputField = styled.input`
    width: 80%;
    padding: 12px;
    border-radius: 25px;
    border: 1px solid #ccc;
    font-size: 16px;
    outline: none;
    background: #ddd;
    color: black;

    &::placeholder {
        color: #666;
    }
`;

export const CheckboxContainer = styled.label`
    display: flex;
    font-size: 14px;
    gap: 5px;
    align-items: flex-start;

    a {
        color: #8b0000;
        text-decoration: none;
        font-weight: bold;
    }

    @media (max-width: 768px) {
        padding: 0 30px;
    }
`;

export const Button = styled.button`
    background: black;
    color: white;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #333;
    }
`;