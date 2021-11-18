import NavBar from './NavBar';
import RecipeDetail from './RecipeDetail';
import RecipeList from './RecipeList';
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
    }, []);
  
    function handleLogin(user) {
      setUser(user);
    }
  
    function handleLogout() {
      setUser(null);
    }

  return (
    <div className="App">
      <NavBar user={user}/>
      <Switch>
        <Route exact path="/recipe/:id">
          <RecipeDetail/>
        </Route>
        <Route exact path="/">
          <RecipeList/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;