import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCoutry, setSelectCountry] = useState("");
  const [selectedState, setSelectState] = useState("");
  const [selectedCity, setSelectCity] = useState("");

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://crio-location-selector.onrender.com/countries"
      );
      const jsonData = await response.json();
      setCountries(jsonData);
    } catch (e) {
      console.error("Failed to fetch data, Error: ", e);
    }
  };

  const fetchStates = async () => {
    try {
      const response = await fetch(
        `https://crio-location-selector.onrender.com/country=${selectedCoutry}/states`
      );
      const jsonData = await response.json();
      setStates(jsonData);
    } catch (e) {
      console.error("Failed to fetch data, Error: ", e);
    }
  };

  const fetchCities = async () => {
    try {
      const response = await fetch(
        `https://crio-location-selector.onrender.com/country=${selectedCoutry}/state=${selectedState}/cities`
      );
      const jsonData = await response.json();
      setCities(jsonData);
    } catch (e) {
      console.error("Failed to fetch data, Error: ", e);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    fetchStates();
  }, [selectedCoutry]);

  useEffect(() => {
    fetchCities();
  }, [selectedState, selectedCoutry]);

  console.log(cities);
  return (
    <div className="App">
      <h1>Select Location</h1>
      <form className="myForm">
        <select
          name="country"
          className="country"
          defaultValue="Select country"
          onChange={(e) => {
            setSelectCountry(e.target.value);
            setSelectState("")
            setSelectCity("");
          }}
        >
          <option value="selectCountry">Select Country</option>
          {countries.map((country) => {
            return (
              <option key={country} value={country}>
                {country}
              </option>
            );
          })}
        </select>
        <select
          name="state"
          defaultValue="Select State"
          onChange={(e) => {
            setSelectState(e.target.value)
            setSelectCity("");
          }}
          disabled={selectedCoutry ? false : true}
        >
          <option value="selectState">Select State</option>
          {states.map((state) => {
            return (
              <option key={state} value={state}>
                {state}
              </option>
            );
          })}
        </select>
        <select
          name="city"
          defaultValue="Select City"
          onChange={(e) => setSelectCity(e.target.value)}
          disabled={selectedState ? false : true}
        >
          <option value="selectCity">Select City</option>
          {cities.map((city) => {
            return (
              <option key={city} value={city}>
                {city}
              </option>
            );
          })}
        </select>
      </form>
      {selectedCoutry && selectedState && selectedCity ? (
        <p>
          You selected <span className="selectedCountry">{selectedCity}</span>,{" "}
          <span className="selectedStateAndCity">
            {selectedState}, {selectedCoutry}
          </span>
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
