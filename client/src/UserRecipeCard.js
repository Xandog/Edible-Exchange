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
        <div>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} style={{width: "300px"}} alt={recipe.name}/>
            <h4>{recipe.cuisine}</h4>
            <p>{recipe.description}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default UserRecipeCard
