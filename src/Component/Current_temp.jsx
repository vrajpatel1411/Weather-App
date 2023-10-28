// import weather_data from "../Services/WeatherData";

const Current_temp = ({ current_data }) => {
  // eslint-disable-next-line no-unused-vars

  let icon_url = "";
  if (current_data) {
    console.log(current_data);
    let weather = current_data["weather"];
    icon_url = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  }
  if (!current_data) {
    return <h1>No data</h1>;
  }
  return (
    <div
      id="current_information"
      className="w-6/12">
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
        <p>Current Temperature : {Math.round(current_data["temp"])} &deg;c </p>
        <p>Feels like : {Math.round(current_data["feels_like"])} &deg; c</p>
      </div>
      <div id="other_temperature">
        <div id="current_humidity">
          <p>Current Humidity: {current_data["humidity"]} %</p>
        </div>
        <div>
          <p>Current Pressur: {current_data["pressure"]} hPa</p>
        </div>
        <div>
          <p>
            Wind Speed: {Math.round(current_data["wind_speed"] * 3.6, 2)} km/hr
          </p>
        </div>
        <div>
          <p>Wind Direction: {current_data["wind_deg"]} &deg;</p>
        </div>
      </div>
    </div>
  );
};

export default Current_temp;
