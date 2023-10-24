import { useEffect, useState } from "react";
import getLocation from "../Services/getLocation";
import getWeather from "../Services/getWeather";
function Homepage() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, UpdateLocation] = useState("Thunder Bay");
  const [date, updateDate] = useState(null);

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

  useEffect(() => {
    if (weatherData) {
      var utcSeconds = weatherData.current.dt;
      var d = new Date(0);
      d.setUTCSeconds(utcSeconds);
      updateDate(d);
    }
  }, [weatherData]);

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

      {weatherData ? (
        <div>
          <h1>Weather Information</h1>

          <h2>
            Location: Latitude- {weatherData.lat}, Longitude - {weatherData.lon}{" "}
            - {location}
          </h2>
          <p>Date: {date ? date.toLocaleString() : "N/A"}</p>
          <p>Temperature: {Math.round(weatherData.current.temp - 273.15)} K</p>
          <p>Description: {weatherData.current.weather[0].description}</p>
        </div>
      ) : (
        <h2>Weather Details Loading</h2>
      )}
    </div>
  );
  // }
}

export default Homepage;
