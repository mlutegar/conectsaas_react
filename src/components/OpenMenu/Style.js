import styled from "styled-components";

export const MenuOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    z-index: 30000;

    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")}; /* Transição de opacidade */
    pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")}; /* Impede cliques quando fechado */
    transition: opacity 0.4s ease-in-out;
`;


export const MenuContainer = styled.div`
    background: #8b0000;
    color: white;
    width: 90%;
    max-width: 400px;
    padding: 2.94rem;
    border-radius: 15px 0 0 15px;
    text-align: center;
    position: relative;
    height: 100%;
    padding-top: 3.5rem;

    transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")}; /* Efeito de entrada */
    transition: transform 0.4s ease-in-out;
`;



export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 2.94rem;
    background: none;
    border: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
    padding: 0;
    margin-top: 3.5rem;
`;

export const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.31rem;
    margin-top: 6.44rem;
    margin-bottom: 4.81rem;
    align-items: flex-end;

    a {
        color: white;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
        transition: color 0.3s;

        &:hover {
            color: #ffcc00;
        }
    }

    hr {
        width: 100%;
        border: 1px solid white;
        margin: 15px 0;
    }
`;

export const SocialIcons = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    a {
        font-size: 24px;
        color: white;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.2);
        }
    }
`;