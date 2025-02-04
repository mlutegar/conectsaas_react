import React from "react";
import { Link } from "react-router-dom";
import { CardCategory as StyledCardCategory } from "./Style";

const CardCategory = ({ name, slug, modoEscuro }) => {
    // Caso não seja fornecido o slug, cria um a partir do nome
    const categorySlug =
        slug || (name ? name.toLowerCase().replace(/\s+/g, "-") : "categoria");

    return (
        <Link to={`/categoria/${categorySlug}`}>
            <StyledCardCategory modoEscuro={modoEscuro}>
                {name || "CATEGORIA"}
            </StyledCardCategory>
        </Link>
    );
};

export default CardCategory;
