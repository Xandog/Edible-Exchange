import React, { useState } from 'react';

function RecipeForm({ recipes, setRecipes, history }) {
    const [formData, setFormData] = useState ({
        name: '',
        image: '',
        description: '',
        cuisine: '',
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(){

        fetch('http://localhost:4000/forms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newForm =>{
          setRecipes([
            ...recipes, newForm
          ])
          history.push('/myforms')
        })
      }

    return (
        <div className="new-user-form">
            <h2>Create New Recipe!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <br/>
                <input 
                    name="name"
                    type="text"
                    id="recipeName"
                    value={formData.name}
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="cuisine">Cuisine Type:</label>
                <br/>
                <select name="cuisine" onChange={handleChange}>
                    <option value="American">American</option>
                    <option value="British">British</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Japanese">Japenese</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Italian">Italian</option>
                </select>
                <br/>
                <label htmlFor="image">Image:</label>
                <br/>
                <input 
                    name="image"
                    type="text"
                    id="recipeImage"
                    value={formData.image}
                    onChange={handleChange} 
                />
                <br/>
                <label htmlFor="description">Description:</label>
                <br/>
                <textarea 
                    name="description"
                    type="text"
                    id="recipeDescription"
                    value={formData.description}
                    onChange={handleChange} 
                    rows={5} 
                />
                <br/>
                <input type="submit" value="Submit Recipe!"/>
            </form>
    </div>
    )
}

export default RecipeForm
