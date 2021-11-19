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
        <header className="navBar">
            <div className="homeBttn">
                <Link to="/">Edible Exchange</Link>
            </div>
            <img className="homeIcon" src="https://cdn.discordapp.com/attachments/247945650371559425/911225662084354088/1792595-middle.png"/>
            <div id="navParent">
                {user ? (
                    <>
                        { user.username.length <= 9 ? 
                        <p id="userGreeting">Hello, {user.username}!</p> 
                        :
                        <p id="smallerGreeting">Hello, {user.username}!</p>
                        }
                        <button className="navBarBttn" id="logoutBttn" onClick={handleLogoutClick}>Logout</button>
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
