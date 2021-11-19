import React from 'react'

function RecipeDetail({recipe}) {
    return (
        <div className="recipeDetail">
            <h1 className="recipeName">{recipe.name}</h1>
            <h3 className="recipeAuthor">By: {recipe.user.username}</h3>
            <img className="recipeImg" src={recipe.image} style={{width: "500px"}} alt={recipe.name}/>
            <h3 className="cuisineType">{recipe.cuisine}</h3>
            <p className="recipeDesc">{recipe.description}</p>
        </div>
    )
}

export default RecipeDetail
