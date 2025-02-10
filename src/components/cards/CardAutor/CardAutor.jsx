import { Link } from "react-router-dom";
import styled from "styled-components";

const CardAutor = ({ author }) => {
    return (
        <AuthorCard>
            <img src={author.avatar_urls?.["96"] || "/fallback-avatar.jpg"} alt={author.name} />
            <Link to={`/autor/${author.slug}`}>
                <h3>{author.name}</h3>
            </Link>
        </AuthorCard>
    );
};

export default CardAutor;

const AuthorCard = styled.div`
    background: #333;
    color: white;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    width: 12.82094rem;
    cursor: pointer;

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-bottom: 10px;
    }

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2rem;
    }

    &:hover {
        background: #555;
    }
`;