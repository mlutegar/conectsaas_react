import styled from "styled-components";

export const HomeDesktop = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const HomeMobile = styled.div`
    display: none;
    flex-direction: column;

    @media (max-width: 768px) {
        display: flex;
    }
`;