import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");

  const clear = () => {
    setInput("");
  };

  const evalute = () => {
    if (input === "") setAns("Error");
    else {
      // let res = eval(input);
      setAns(eval(input));
      // setInput("");
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input type="text" value={input} />
      <div>{ans}</div>
      <div className="keys">
        <button
          onClick={() => setInput((prev) => prev + "7")}
          className="keypad"
        >
          7
        </button>
        <button onClick={() => setInput((prev) => prev + 8)} className="keypad">
          8
        </button>
        <button onClick={() => setInput((prev) => prev + 9)} className="keypad">
          9
        </button>
        <button
          onClick={() => setInput((prev) => prev + "+")}
          className="keypad"
        >
          +
        </button>
        <button onClick={() => setInput((prev) => prev + 4)} className="keypad">
          4
        </button>
        <button onClick={() => setInput((prev) => prev + 5)} className="keypad">
          5
        </button>
        <button onClick={() => setInput((prev) => prev + 6)} className="keypad">
          6
        </button>
        <button
          onClick={() => setInput((prev) => prev + "-")}
          className="keypad"
        >
          -
        </button>
        <button onClick={() => setInput((prev) => prev + 1)} className="keypad">
          1
        </button>
        <button onClick={() => setInput((prev) => prev + 2)} className="keypad">
          2
        </button>
        <button onClick={() => setInput((prev) => prev + 3)} className="keypad">
          3
        </button>
        <button
          onClick={() => setInput((prev) => prev + "*")}
          className="keypad"
        >
          *
        </button>
        <button onClick={clear} className="keypad">
          C
        </button>
        <button onClick={() => setInput((prev) => prev + 0)} className="keypad">
          0
        </button>
        <button onClick={evalute} className="keypad">
          =
        </button>
        <button
          onClick={() => setInput((prev) => prev + "/")}
          className="keypad"
        >
          /
        </button>
      </div>
    </div>
  );
}

export default App;
