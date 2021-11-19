import React, { useState, useEffect } from 'react';
import CuisineFilter from './CuisineFilter';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes, setRecipes, setSelectedRecipe }) {
    const [selectedCuisine, setSelectedCuisine] = useState("All");

    useEffect(() => {
        fetch("/recipes")
          .then((r) => r.json())
          .then(setRecipes);
    }, [setRecipes]);
    
    const displayedRecipes = recipes.filter(
        (recipe) => selectedCuisine === "All" || recipe.cuisine === selectedCuisine
    );
    

    return (
        <div>
            <div className='sidebar'>
                <CuisineFilter setSelectedCuisine={setSelectedCuisine}/>
            </div>
            <div className='grid'>
                {displayedRecipes.map((recipe) => {
                    return <RecipeCard key={recipe.id} recipe={recipe} setSelectedRecipe={setSelectedRecipe}/>
                })}
            </div>
        </div>
    )
}

export default RecipeList
