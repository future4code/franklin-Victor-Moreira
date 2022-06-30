import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const RecipeDetailPage = () => {
    useUnprotectedPage()

    return(
        <div>
            <h1>RecipeDetailPage</h1>
        </div>
    )
}

export default RecipeDetailPage