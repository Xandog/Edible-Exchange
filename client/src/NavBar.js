import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({user, setUser}) {
    //Log-out function
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }
    return (
        <header class ="entire-navBar">
            <div class="navBarBttn" id="homeBttn">
                <Link to="/">Edible Exchange</Link>
            </div>
            <div>
                {user ? (
                    <>
                        <button onClick={handleLogoutClick}>Logout</button>
                        <Link class="navBarBttn" id="recipeBttn" to="/new-recipe">Create New Recipe!</Link>
                    </>
                ) : (
                    <>
                        <Link class="navBarBttn" id="signupBttn" to="/signup">Sign-up</Link>
                        <Link class="navBarBttn" id="loginBttn" to="/login">Login</Link>
                    </>
                )}
            </div>
        </header>
    )
}

export default NavBar
