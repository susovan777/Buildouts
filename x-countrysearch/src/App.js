import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (e) {
        console.error("Error fetching data: " + e);
      }
    };

    fetchData();
  }, []);
  console.log(countries);
  return (
    <div className="App">
      <div className="search">
        <input type="text" placeholder="Search for countries..." />
      </div>
      <div className="Result">
        {countries.map((country) => {
          return (
            <div className="countryCard">
              <img src={country.flags.png} alt="" />
              <h3>{country.name.common}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
