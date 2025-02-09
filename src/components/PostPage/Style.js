import styled from "styled-components";
import {SidebarContainer} from "../Sidebar/Style";

export const PostContainer = styled.div`
    max-width: 800px;
    flex: 2;
`;

export const PostTitle = styled.h1`
    color: #000;
    font-family: "Libre Franklin";
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: left;
`;

export const PostImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 20px;
`;

export const PostInfo = styled.p`
    font-size: 14px;
    color: gray;
    text-align: center;
    margin-bottom: 20px;
`;

export const PostContent = styled.div`
    font-size: 16px;
    line-height: 1.6;

    img {
        max-width: 100%;
        height: auto;
        margin: 20px 0;
    }

    p {
        margin-bottom: 10px;
    }

    /* Estiliza a primeira letra do primeiro parágrafo */

    .primeiro-paragrafo:first-of-type::first-letter {
        font-size: 3rem;
        font-weight: bold;
        color: #8b0000; /* Vermelho do site */
        float: left;
        margin-right: 10px;
        line-height: 1;
    }
`;

export const PostWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    margin: 0 auto;
    padding: 20px;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;

        ${SidebarContainer} {
            display: none;
        }
    }
`;

export const PostMeta = styled.div`
    font-size: 0.875rem;
    color: #666;
    font-family: "Libre Franklin";
    font-weight: 400;
    margin-top: 0.5rem;
    display: flex;
    gap: 10px;
    align-items: center;

    span {
        gap: 1rem;
        display: flex;
        align-items: center;
    }
`;

export const ShareButton = styled.a`
    color: black;
    font-size: 0.875rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.3s ease;

    gap: 1rem;
    display: flex;
    align-items: center;

    margin: 1rem 0;
`;
