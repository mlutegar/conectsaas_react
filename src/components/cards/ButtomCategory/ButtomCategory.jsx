import React from "react";
import { CardCategory as StyledCardCategory } from "./Style";

const CardCategory = ({ name, modoEscuro }) => {
    return (
        <StyledCardCategory modoEscuro={modoEscuro}>
            {name || "CATEGORIA"}
        </StyledCardCategory>
    );
};

export default CardCategory;
