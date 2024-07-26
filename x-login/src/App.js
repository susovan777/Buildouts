import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toggleForm, settoggleForm] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "username") setUsername(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, password);
    if (!validateInput(username, password)) return;

    if (username !== "user" && password !== "password") setLoginSuccess(true);
    if (username === "user" && password === "password") settoggleForm(true);
  };

  const validateInput = (user, password) => {
    if (user.trim === "" || user === undefined) {
      return false;
    }
    if (password.trim === "" || password === undefined) {
      return false;
    }
    return true;
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {toggleForm ? (
        <p>Welcome, user!</p>
      ) : (
        <>
          {loginSuccess && <p>Invalid username or password</p>}
          <form onSubmit={handleSubmit} className="myForm">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="username"
              onChange={handleChange}
              required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={handleChange}
              required
            />
            <br />
            <button>Submit</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
