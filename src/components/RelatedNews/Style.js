import styled from "styled-components";

export const RelatedContainer = styled.div`
    background: #f9f9f9;
    padding: 15px;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const RelatedTitle = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const RelatedList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const RelatedItem = styled.li`
    margin-bottom: 8px;

    a {
        text-decoration: none;
        color: #333;
        font-size: 16px;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
        }
    }
`;
