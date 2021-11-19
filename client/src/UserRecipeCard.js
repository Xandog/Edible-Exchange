import React from 'react'

function UserRecipeCard({recipe}) {
    //Deletes a recipe
    function handleClick() {
        fetch(`/recipes/${recipe.id}`, {
            method: "DELETE" 
        })
        .then((r) => {
          if (r.ok) {
            console.log(r)
          } else {
            console.log(r)
          }
        });
    }
    
    return (
        <div className="userRecipeCard">
            <h2 className="recipeName">{recipe.name}</h2>
            <img className="recipeImg" src={recipe.image} style={{width: "300px"}} alt={recipe.name}/>
            <h4 className="cuisineType">{recipe.cuisine}</h4>
            <p className="recipeDesc">{recipe.description}</p>
            <button className="deleteBttn" onClick={handleClick}>Delete</button>
        </div>
    )
}

export default UserRecipeCard
