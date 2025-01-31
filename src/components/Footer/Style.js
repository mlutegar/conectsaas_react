import styled from "styled-components";

export const FooterContainer = styled.footer`
    background: #333;
    color: white;
    padding: 40px 20px;
    text-align: left;
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const FooterSection = styled.div`
    flex: 1;
    margin: 10px;
    
    h4 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
        text-transform: uppercase;
        border-bottom: 1px solid white;
        padding-bottom: 5px;
    }

    a {
        display: block;
        color: white;
        text-decoration: none;
        margin: 5px 0;
        font-size: 14px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const CategoriesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 10px;

    a {
        color: white;
        font-size: 20px;
        transition: 0.3s;

        &:hover {
            color: #ffcc00;
        }
    }
`;

export const FooterBottom = styled.div`
    text-align: center;
    margin-top: 20px;
    padding-top: 10px;
    border-top: 1px solid white;

    p {
        font-size: 14px;
        margin: 5px 0;
    }

    a {
        color: white;
        text-decoration: none;
        margin: 0 10px;
        font-size: 14px;

        &:hover {
            text-decoration: underline;
        }
    }
`;