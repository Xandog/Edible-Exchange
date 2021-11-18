import NavBar from './NavBar';
import RecipeDetail from './RecipeDetail';
import RecipeList from './RecipeList';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import RecipeForm from './RecipeForm';
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const history = useHistory;

  //Auto-login
  useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
    }, []);

  return (
    <div className="App">
      <NavBar 
        user={user}
        setUser={setUser} 
      />
      {user ? (
        <Switch>
          <Route exact path="/new-recipe">
            <RecipeForm recipes={recipes} setRecipes={setRecipes} history={history}/>
          </Route>
          <Route exact path="/recipe/:id">
            <RecipeDetail/>
          </Route>
          <Route exact path="/">
            <RecipeList/>
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/signup">
            <SignupForm setUser={setUser}/>
          </Route>
          <Route exact path="/login">
            <LoginForm setUser={setUser}/>
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