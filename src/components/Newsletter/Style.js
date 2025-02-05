import styled from "styled-components";

export const NewsletterStyle = styled.div`
    background: ${(props) => (props.darkMode ? "#fff" : "#333")};
    padding: 30px;
    text-align: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-width: 800px;
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
    gap: 10px;
    margin-top: 20px;
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
    align-items: center;
    font-size: 14px;
    gap: 5px;

    a {
        color: #8b0000;
        text-decoration: none;
        font-weight: bold;
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