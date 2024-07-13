import "./App.css";
import { useState, useEffect } from "react";
import CountryCard from "./Components/CountryCard";

function App() {
  const [apiData, setApiData] = useState([]); // fetched data
  const [searchInput, setSearchInput] = useState(""); // input chars
  const [filteredCountries, setFilteredCountries] = useState([]); // final datas after filtered out

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setApiData(data);
        setFilteredCountries(data);
      } catch (e) {
        console.error("Error fetching data: " + e);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const searchCountries = () => {
      // if the searchInput is empty then filter
      if (searchInput !== "") {
        const filteredData = apiData.filter((country) => {
          return Object.values(country.name.common)
            .join("")
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        });
        setFilteredCountries(filteredData);
      } else setFilteredCountries(apiData);
    };
    searchCountries();
  }, [apiData, searchInput]); // update UI when apiData & searchInput updated
  console.log(filteredCountries);

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="Search for countries..."
          value={searchInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="Result">
        {filteredCountries &&
          filteredCountries.map((country) => {
            return <CountryCard country={country} key={country.cca2} />;
          })}
      </div>
    </div>
  );
}

export default App;
