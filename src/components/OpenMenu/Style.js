import styled from "styled-components";

export const MenuOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const MenuContainer = styled.div`
    background: #8b0000;
    color: white;
    width: 90%;
    max-width: 400px;
    padding: 20px;
    border-radius: 15px;
    text-align: center;
    position: relative;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
`;

export const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 40px;

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
    justify-content: center;
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