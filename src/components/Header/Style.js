import styled from "styled-components";

export const Top = styled.header`
    background: #8b0000; /* Vermelho escuro */
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
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

    .search-icon {
        font-size: 20px;
        cursor: pointer;
        color: #fff;
    }

    a {
        color: #fff;
        text-decoration: none;
        font-weight: bold;

        &:hover {
            color: #ffcc00;
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
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    color: white;
    position: relative;

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
        gap: 30px; /* Espaçamento entre os itens */
        justify-content: center;
        width: 100%;
        max-width: 1200px;
    }

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }
`;
