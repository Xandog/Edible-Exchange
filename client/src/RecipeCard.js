import React from 'react'

function RecipeCard({recipe}) {

    return (
        <div>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} style={{width: "200px"}} alt={recipe.name}/>
            <h4>{recipe.cuisine}</h4>
        </div>
    )
}

export default RecipeCard
