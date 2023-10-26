import { useEffect, useState } from "react";
import getLocation from "../Services/getLocation";
import getWeather from "../Services/getWeather";
import { useContext } from "react";
import weather_data from "../Services/WeatherData";

function Homepage() {
  // eslint-disable-next-line no-unused-vars
  const [weatherData, setWeatherData] = useContext(weather_data);
  const [location, UpdateLocation] = useState("Thunder Bay");

  useEffect(() => {
    if (location) {
      const fetchWeatherData = async () => {
        try {
          const { lat, lon } = await getLocation(location);
          const weatherDetails = await getWeather(lat, lon);
          setWeatherData(weatherDetails);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };
      fetchWeatherData();
    }
  }, [location]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          UpdateLocation(formData.get("location"));
        }}>
        <label htmlFor="location">Enter the Location :</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Type city name"></input>
        <button type="Submit">Search Weather</button>
      </form>
      <div>
        <h1>{location}</h1>
      </div>
    </div>
  );
  // }
}

export default Homepage;
