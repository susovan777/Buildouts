import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=2a7de2e118ac48f586175901240601&q=${searchText}`
      );
      // if (response) {
      setIsLoading(false);
      const apiData = await response.json();
      setWeather(apiData.current);
      // }
    } catch (e) {
      alert("Failed to fetch weather data");
      // console.error("Error fetching weather", e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText) {
      setIsLoading(true);
      setSearchText(inputText);
    } else alert("Enter a city name");
  };

  useEffect(() => {
    fetchWeather();
  }, [searchText]);

  // console.log(weather);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          placeholder="Enter City Name"
          onChange={(e) => setInputText(e.target.value)}
        />
        <button>Search</button>
      </form>
      {isLoading && <p>Loading data...</p>}
      {!isLoading && weather && (
        <div className="weather-cards">
          <Card title="Temparature" data={`${weather.temp_c}°C`} />
          <Card title="Humidity" data={`${weather.humidity}%`} />
          <Card title="Condition" data={weather.condition.text} />
          <Card title="Wind Speed" data={`${weather.wind_kph} kph`} />
        </div>
      )}
    </div>
  );
}

export default App;
