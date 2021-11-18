import React from 'react';
import CuisineFilter from './CuisineFilter';
import RecipeCard from './RecipeCard';
import { useState, useEffect } from "react";

function RecipeList({ setRecipes, recipes }) {
    const [selectedCuisine, setSelectedCuisine] = useState("All");

    useEffect(()=> {
        fetch('/recipes')
        .then(res => res.json())
        .then(data => {
        setRecipes(data)
        })
    },[])

    const displayedRecipes = recipes.filter(
        (recipe) => selectedCuisine === "All" || recipe.cuisine === selectedCuisine
    );


    return (
        <div>
            <div class='sidebar'>
                <CuisineFilter setSelectedCuisine={setSelectedCuisine}/>
            </div>
            <div class='grid'>
                {displayedRecipes.map((recipe) => {
                    return <RecipeCard key={recipe.id} recipe={recipe}/>
                })}
            </div>
        </div>
    )
}

export default RecipeList
