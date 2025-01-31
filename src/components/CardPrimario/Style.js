import styled from "styled-components";

export const CardContainer = styled.div`
    background: white;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    padding: 15px;
`;

export const CardImage = styled.img`
    width: 100%;
    border-radius: 8px;
    display: block;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const CardCategory = styled.p`
    background: #333;
    color: white;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    padding: 5px 10px;
    display: inline-block;
    border-radius: 4px;
    margin: 10px 0;
`;

export const CardTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
    color: black;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const CardInfo = styled.p`
    font-size: 14px;
    color: red;
    font-weight: bold;
    margin-top: 5px;
`;