import React from 'react';
import { useState } from 'react';

function LoginForm({setUser, history}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
            history.push('/')
          }
        });
      }

    return (
        <div className="form">
        <h2>Login!</h2>
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
            <input type="submit" value="Login!"/>
        </form>
    </div>
    )
}

export default LoginForm
