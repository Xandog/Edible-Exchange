import React from 'react';
import { useState } from 'react';

function SignupForm({setUser, history}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
            history.push('/')
          }
        });
    }

    return (
    <div className="form">
        <h2>Sign-up!</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <br/>
            <input 
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <label htmlFor="password">Password:</label>
            <br/>
            <input 
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <label htmlFor="password">Confirm Password:</label>
            <br/>
            <input 
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <br/>
            <input type="submit" value="Sign-up!"/>
        </form>
    </div>
    )
}

export default SignupForm
