import NavBar from './NavBar';
import RecipeDetail from './RecipeDetail';
import RecipeList from './RecipeList';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import RecipeForm from './RecipeForm';
import UserRecipeList from './UserRecipeList'
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const history = useHistory();

  //Auto-login
  useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
    }, []);

    function afterCreateRecipe(){
      fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((user) => setUser(user));
            history.push('/')
          }
      });
  }

  return (
    <div className="App">
      <NavBar 
        user={user}
        setUser={setUser} 
        history={history}
      />
      {user ? (
        <Switch>
          <Route exact path="/my-recipes">
          <UserRecipeList user={user} setUser={setUser}/>
          </Route>
          <Route exact path="/new-recipe">
            <RecipeForm user={user} setUser={setUser} afterCreateRecipe={afterCreateRecipe}/>
          </Route>
          {
            selectedRecipe && (
          <Route exact path={`/recipes/${selectedRecipe.id}`}>
            <RecipeDetail recipe={selectedRecipe}/>
          </Route>
          )
          }
          <Route exact path="/">
            <RecipeList recipes={recipes} setRecipes={setRecipes} setSelectedRecipe={setSelectedRecipe}/>
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/signup">
            <SignupForm setUser={setUser} history={history}/>
          </Route>
          <Route exact path="/login">
            <LoginForm setUser={setUser} history={history}/>
          </Route>
          <Route exact path="/recipe/:id">
            <RecipeDetail/>
          </Route>
          <Route exact path="/">
            <RecipeList setRecipes={setRecipes} recipes={recipes}/>
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;