import "./App.css";
import { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setsuggestedText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    // const correctedText = correctedWords.join(" ");

    // Set the suggested text (first corrected word)
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );

    setsuggestedText(firstCorrection || "");
  };

  return (
    <div className="App">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        placeholder="Enter text..."
        rows="5"
        cols="40"
        onChange={handleInputChange}
      ></textarea>
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
}

export default App;

// Transformed from class based component: 🔗 https://codesandbox.io/p/sandbox/xspellcheck-classbased-z3skrj?file=%2Fsrc%2FSpellCheckApp.js%3A28%2C36
