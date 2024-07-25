import React, { useState } from "react";

const Form = ({ username, password, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="myForm">
      <label>
        Username:{" "}
        <input
          type="text"
          name="username"
          value={username}
          placeholder="username"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Password:{" "}
        <input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
};
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [welcomeText, setWelcomeText] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "username") setUsername(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(username, password);
    if (username === "user" && password === "password") {
      setWelcomeText("Welcome, user!");
      setLoginSuccess(true);
    } else setWelcomeText("Invalid username or password");
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {loginSuccess ? (
        <p>{welcomeText}</p>
      ) : (
        <>
          <p>{welcomeText}</p>
          <Form
            username={username}
            password={password}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </>
      )}
    </div>
  );
}

export default App;
