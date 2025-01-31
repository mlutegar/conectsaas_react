import { Link } from "react-router-dom";
import styled from "styled-components";

const CardCategoria = ({ category }) => {
    return (
        <CategoryCard>
            <Link to={`/categoria/${category.slug}`}>
                <h3>{category.name}</h3>
            </Link>
        </CategoryCard>
    );
};

export default CardCategoria;

const CategoryCard = styled.div`
    background: #222;
    color: white;
    padding: 15px;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;

    a {
        color: white;
        text-decoration: none;
        font-weight: bold;
        font-size: 1.2rem;
    }

    &:hover {
        background: #444;
    }
`;