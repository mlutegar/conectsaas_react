import styled from "styled-components";
import {SidebarContainer} from "../Sidebar/Style";

export const PostContainer = styled.div`
    max-width: 800px;
    flex: 2;
`;

export const PostTitle = styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
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
    margin: 40px auto;
    padding: 20px;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        
        ${SidebarContainer} {
            display: none;
        }
    }
`;
