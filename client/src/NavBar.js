import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({user, setUser, history}) {
    //Log-out function
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
            history.push('/')
          }
        });
    }
    return (
        <header className="entire-navBar">
            <div className="navBarBttn" id="homeBttn">
                <Link to="/">Edible Exchange</Link>
            </div>
            <div>
                {user ? (
                    <>
                        <button onClick={handleLogoutClick}>Logout</button>
                        <Link className="navBarBttn" id="userRecipeBttn" to="/my-recipes">My Recipes</Link>
                        <Link className="navBarBttn" id="recipeBttn" to="/new-recipe">Create New Recipe!</Link>
                    </>
                ) : (
                    <>
                        <Link className="navBarBttn" id="signupBttn" to="/signup">Sign-up</Link>
                        <Link className="navBarBttn" id="loginBttn" to="/login">Login</Link>
                    </>
                )}
            </div>
        </header>
    )
}

export default NavBar
