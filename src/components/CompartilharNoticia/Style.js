import styled from "styled-components";

export const ShareContainer = styled.div`
    text-align: center;
    margin: 40px 0;
    color: var(--primaria);
`;

export const ShareText = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    width: 620px;
`;

export const ShareIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    font-size: 24px;

    a {
        color: var(--primaria);
        transition: all 0.3s ease-in-out; /* Suaviza a transição */

        &:hover {
            color: #333333; 
            transform: scale(1.2); 
        }

        &:active {
            transform: scale(1.1); /* Reduz um pouco para dar efeito de clique */
        }
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: var(--primaria);
    margin: 10px 0;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`;