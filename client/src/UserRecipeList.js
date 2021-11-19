import React from 'react'
import UserRecipeCard from './UserRecipeCard'

function UserRecipeList( {user} ) {

    return (
        <div>
            <div className='grid'>
                {user.recipes.map((recipe) => {
                    return <UserRecipeCard key={recipe.id} recipe={recipe}/>
                })}
            </div>
        </div>
    )
}

export default UserRecipeList
