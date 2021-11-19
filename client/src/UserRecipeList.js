import React from 'react'
import UserRecipeCard from './UserRecipeCard'
import { useEffect } from 'react'

function UserRecipeList( {user, setUser} ) {

    function afterDelete(){
        fetch("/me").then((response) => {
            if (response.ok) {
              response.json().then((user) => setUser(user));
            }
        });
    }

    return (
        <div>
            <div className='grid'>
                {user.recipes.map((recipe) => {
                    return <UserRecipeCard key={recipe.id} recipe={recipe} afterDelete={afterDelete}/>
                })}
            </div>
        </div>
    )
}

export default UserRecipeList
