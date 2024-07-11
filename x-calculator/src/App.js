import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [ans, setAns] = useState("");

  const add = () => {
    setInput((prev) => prev + "+");
  };
  const substract = () => {};
  const multiply = () => {};
  const divide = () => {};

  const clear = () => {
    setInput("");
  };

  const evalute = () => {
    let exp = input.split("");
    if (input === "") setAns("Error");
    let opr1 = Number(exp[0]);
    let opr2 = Number(exp[exp.length - 1]);
    let op = exp[1];

    if (op === "+") setAns(opr1 + opr2);
    if (op === "-") setAns(opr1 - opr2);
    if (op === "*") setAns(opr1 * opr2);
    if (op === "/") setAns(opr1 / opr2);
    console.log(opr1, opr2, op);
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
