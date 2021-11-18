import React from 'react'

function RecipeDetail({recipe}) {
    return (
        <div>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} style={{width: "500px"}} alt={recipe.name}/>
            <h3>{recipe.cuisine}</h3>
            <p>{recipe.description}</p>
        </div>
    )
}

export default RecipeDetail
