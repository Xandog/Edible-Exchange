import React from 'react'
import { Link } from 'react-router-dom'

function RecipeCard({recipe, setSelectedRecipe}) {

    return (
        <div>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} style={{width: "200px"}} alt={recipe.name}/>
            <h4>{recipe.cuisine}</h4>
            <Link onClick={() => setSelectedRecipe(recipe)} to={`/recipes/${recipe.id}`}>Recipe Details</Link>
        </div>
    )
}

export default RecipeCard