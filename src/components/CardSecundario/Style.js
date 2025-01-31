import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    overflow: hidden;
    padding: 10px;
`;

export const CardImage = styled.img`
    width: 120px;
    height: 70px;
    border-radius: 6px;
    object-fit: cover;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const CardCategory = styled.p`
    background: #333;
    color: white;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    padding: 4px 8px;
    display: inline-block;
    border-radius: 4px;
    margin-bottom: 5px;
`;

export const CardTitle = styled.h3`
    font-size: 14px;
    font-weight: bold;
    margin: 5px 0;
    color: black;
    text-decoration: none;
    line-height: 1.2;

    &:hover {
        text-decoration: underline;
    }
`;

export const CardInfo = styled.p`
    font-size: 12px;
    color: var(--primaria);
    font-weight: bold;
    margin-top: 3px;
`;