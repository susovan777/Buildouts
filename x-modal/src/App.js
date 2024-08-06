import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>User Details Modal</h1>
      <button>Open Form</button>

      <div className="modal">
        <h2>Fill Details</h2>
        <form>
          <label>Username:</label>
          <input type="text" required />
          <label>Email Address:</label>
          <input type="email" required />
          <label>Phone Number:</label>
          <input type="text" required />
          <label>Date of Birth:</label>
          <input type="date" required />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
