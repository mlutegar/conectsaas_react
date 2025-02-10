import styled from "styled-components";

export const SidebarContainer = styled.aside`
    width: 300px;
    padding: 0 15px;

    h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const SearchBar = styled.div`
    display: none;
    align-items: center;
    background: #333;
    padding: 8px;
    border-radius: 5px;
    margin-bottom: 20px;
`;

export const SearchInput = styled.input`
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: white;
    padding: 5px;
    font-size: 14px;

    &::placeholder {
        color: white;
        opacity: 0.7;
    }
`;

export const SearchButton = styled.button`
    background: red;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
    color: white;
`;

export const RecentPosts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const RecentPostItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    img {
        width: 100%;
        border-radius: 5px;
    }

    h4 {
        font-size: 14px;
        color: black;
    }
`;
