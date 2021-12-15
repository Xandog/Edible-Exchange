import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RecipeDetail() {
    const [recipeUser, setRecipeUser] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        fetch(`/recipes/${id}`)
        .then((r) => r.json())
        .then((data) => {
            setRecipe(data)
            setRecipeUser(data.user)
        })
      }, [])

    return (
        <div className="recipeDetail">
            <h1 className="recipeName">{recipe.name}</h1>
            <h3 className="recipeAuthor">By: {recipeUser.username}</h3>
            <img className="recipeImg" src={recipe.image} style={{width: "500px"}} alt={recipe.name}/>
            <h3 className="cuisineType">{recipe.cuisine}</h3>
            <p className="recipeDesc">{recipe.description}</p>
        </div>
    )
}

export default RecipeDetail
