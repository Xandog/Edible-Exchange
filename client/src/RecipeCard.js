import React from 'react'
import { Link } from 'react-router-dom'

function RecipeCard({recipe, setSelectedRecipe}) {

    return (
        <Link className="recipeCard" onClick={() => setSelectedRecipe(recipe)} to={`/recipes/${recipe.id}`}>
            <h2 className="recipeName">{recipe.name}</h2>
            <h4 className="recipeAuthor">By: {recipe.user.username}</h4>
            <img className="recipeImg" src={recipe.image} style={{width: "200px", height: "150px"}} alt={recipe.name}/>
            <h4 className="cuisineType">{recipe.cuisine}</h4>
        </Link>
    )
}

export default RecipeCard