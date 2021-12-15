import React, { useState } from 'react';

function RecipeForm({user, afterCreateRecipe}) {
    const [testData, setTestData] = useState();
    const [formData, setFormData] = useState ({
        name: "",
        image: "",
        description: "",
        cuisine: "",
        user_id: user.id,
    })

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function anotherChange(e, editor) {
        setTestData(editor.getData());
    }

    // make the function async to enable the await keyword
    async function handleSubmit(e) {
    e.preventDefault();
    debugger
    // fetch returns a Promise, we must await it
    const response = await fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // response.json() returns a Promise, we must await it
    const data = await response.json();
    if (response.ok) {
      console.log("Recipe created:", data);
      afterCreateRecipe();
    } 
  }

    return (
        <div className="form">
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
                    <option value="Select">--Select-Category--</option>
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
                    className="editable"
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
