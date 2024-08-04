import { useState } from "react";

const data = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

function App() {
  const [input, setInput] = useState("");
  const [meaning, setMeaning] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    for (const obj of data) {
      if (obj.word.toLowerCase() === input.toLowerCase()) {
        setMeaning(obj.meaning);
        return;
      } else setMeaning("Word not found in the dictionary.");
    }
  };

  // console.log(meaning);

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={input}
        placeholder="Search for a word..."
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
      <h4>Definition:</h4>
      <p>{meaning}</p>
    </div>
  );
}

export default App;
