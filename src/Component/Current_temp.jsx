import { useContext } from "react";
import weather_data from "../Services/WeatherData";

const Current_temp = () => {
  // eslint-disable-next-line no-unused-vars
  const [weatherData, _] = useContext(weather_data);
  let current_data = "";
  let icon_url = "";
  if (weatherData) {
    current_data = weatherData["current"];
    let weather = current_data["weather"];
    icon_url = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  }

  return (
    <div id="current_information">
      <div id="temperature">
        <div id="temp_icon">
          <img
            src={icon_url}
            alt="Temp Icon"></img>
          <p>
            Weather Description :{" "}
            {current_data ? current_data["weather"][0].description : ""}{" "}
          </p>
        </div>
        <p>
          Current Temperature : {Math.round(current_data["temp"] - 273.15)}{" "}
          &deg;c{" "}
        </p>
        <p>
          Feels like : {Math.round(current_data["feels_like"] - 273.15)} &deg; c
        </p>
      </div>
      <div id="other_temperature">
        <div id="current_humidity">
          <p>Current Humidity: {current_data["humidity"]} %</p>
        </div>
        <div>
          <p>Current Pressur: {current_data["pressure"]} hPa</p>
        </div>
        <div>
          <p>Wind Speed: {current_data["wind_speed"] * 3.6} km/hr </p>
        </div>
        <div>
          <p>Wind Direction: {current_data["wind_deg"]} &deg;</p>
        </div>
      </div>
    </div>
  );
};

export default Current_temp;
