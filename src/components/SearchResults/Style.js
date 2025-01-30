import styled from "styled-components";

export const SearchContainer = styled.div`
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const SearchTitle = styled.h2`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
`;

export const ResultsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const ResultItem = styled.div`
    background: #f9f9f9;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

    h3 {
        font-size: 18px;
        margin: 0 0 5px;
    }

    p {
        font-size: 14px;
        color: #666;
    }

    a {
        text-decoration: none;
        color: black;

        &:hover {
            text-decoration: underline;
        }
    }
`;
