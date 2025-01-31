import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    padding: 15px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
    width: 200px;
    height: 120px;
    border-radius: 6px;
    object-fit: cover;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-left: 15px;
`;

export const CardTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    color: black;
    text-decoration: none;
    line-height: 1.2;
    margin-bottom: 5px;

    &:hover {
        text-decoration: underline;
    }
`;

export const CardExcerpt = styled.p`
    font-size: 14px;
    color: #444;
    margin-bottom: 8px;
    line-height: 1.4;
`;

export const CardInfo = styled.p`
    font-size: 12px;
    color: var(--primaria);
    font-weight: bold;
    margin-top: 5px;
`;