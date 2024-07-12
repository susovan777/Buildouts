import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountry(data);
      } catch (e) {
        console.error("Error fetching data: " + e);
      }
    };

    fetchData();
  }, []);
  console.log(country);
  return (
    <div className="App">
      <div className="search">
        <input type="text" placeholder="Search for countries..." />
      </div>
      <div className="Result"></div>
    </div>
  );
}

export default App;
