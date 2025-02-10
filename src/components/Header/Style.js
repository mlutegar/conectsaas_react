import styled from "styled-components";

export const Top = styled.header`
    background: #8b0000; /* Vermelho escuro */
    padding: 15px 20px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: 768px) {
        position: fixed;
        width: 100%;
        box-sizing: border-box;
        z-index: 20000;
    }
`;

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1440px;
`;

export const Logo = styled.div`
    img {
        height: 40px;
    }
`;

export const Menu = styled.ul`
    list-style: none;
    display: flex;
    gap: 15px;

    @media (max-width: 768px) {
        display: ${(props) => (props.open ? "flex" : "none")};
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background: #222;
        padding: 20px;
    }
`;

export const MenuItem = styled.li`
    a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        transition: 0.3s;

        &:hover {
            color: #ffcc00; /* Amarelo destaque */
        }
    }
`;

export const AuthLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    .search-icon, .close-icon {
        font-size: 20px;
        cursor: pointer;
        color: #fff;
        transition: color 0.3s ease, transform 0.2s ease;

        &:hover {
            color: #ffcc00;
            transform: scale(1.1);
        }
    }

    svg {
        cursor: pointer;
        width: 24px;
        height: 24px;
        transition: color 0.3s ease, transform 0.2s ease;

        &:hover {
            color: #ffcc00;
            transform: scale(1.1);
        }
    }

    @media (max-width: 768px) {
        .search-icon, .close-icon {
            font-size: 26px; /* Ícones maiores */
        }

        svg {
            width: 32px;
            height: 32px;
        }
    }
`;


export const MenuToggle = styled.div`
    display: none;
    font-size: 24px;
    color: #fff;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
`;

/* 🎯 Barra de Notícias - Cinza com Borda Preta */
export const NewsBar = styled.div`
    height: 3.1875rem;
    flex-shrink: 0;
    background: #333;
    display: flex;
    align-items: center;
    padding: 0 20px; /* Adiciona um espaçamento na esquerda */
    font-size: 14px;
    font-weight: bold;
    color: white;
    position: relative;
    justify-content: center;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 0.3125rem;
        background: black;
    }

    .categories-container {
        display: flex;
        gap: 20px;
        justify-content: flex-start; /* Alinha à esquerda */
        width: 100%;
        max-width: 1440px;
        text-transform: uppercase;
    }

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #8b0000;
    border: 2px solid white;
    border-radius: 25px;
    margin: 10px auto;
    position: absolute;
    width: ${props => props.isOpen ? "22.125rem" : "0"};
    height: 2.375rem;
    top: -17px;
    left: ${props => props.isOpen ? "-594%" : "0"};
    opacity: ${props => props.isOpen ? 1 : 0};
    visibility: ${props => props.isOpen ? "visible" : "hidden"};
    transition: all 0.3s ease-in-out;
    overflow: hidden;

    svg {
        cursor: pointer;
        width: 24px;
        height: 24px;
        transition: color 0.3s ease, transform 0.2s ease;
        position: relative;
        right: 17px;
        opacity: ${props => props.isOpen ? 1 : 0};
        transition: opacity 0.2s ease-in-out;

        &:hover {
            color: #ffcc00;
            transform: scale(1.1);
        }
    }

    @media (max-width: 768px) {
        width: ${props => props.isOpen ? "100%" : "0"};
        max-width: none;
        position: fixed;
        box-sizing: border-box;
        top: 78px;
        left: 0;
        border-radius: 0;
        padding: 11px;
        border: none;
        background: #333333;
        margin: 0;
    }
`;

export const SearchInput = styled.input`
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-left: 0.75rem;
    opacity: ${props => props.isOpen ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
    color: white;

    &::placeholder {
        color: white;
    }
`;

export const Navegacao = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 20px;

    @media (max-width: 768px) {
        position: static;
    }
`;