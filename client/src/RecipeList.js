import React from 'react';
import CuisineList from './CuisineList';
import RecipeCard from './RecipeCard';
import { useState, useEffect } from "react";

function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(()=> {
        fetch('/recipes')
        .then(res => res.json())
        .then(data => {
        setRecipes(data)
        })
    },[])


    return (
        <div>
            <div class='sidebar'>
                <CuisineList/>
            </div>
            <div class='grid'>
                {recipes.map((recipe) => {
                    return <RecipeCard key={recipe.id} recipe={recipe}/>
                })}
            </div>
        </div>
    )
}

export default RecipeList
