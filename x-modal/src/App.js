import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Details Modal</h1>
      <button className="open-modal-btn" onClick={handleClick}>
        Open Form
      </button>

      {isClicked && <Modal setIsClicked={setIsClicked} />}
    </div>
  );
}

export default App;
