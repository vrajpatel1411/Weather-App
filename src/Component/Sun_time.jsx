// import { useContext } from "react";
// import weather_data from "../Services/WeatherData";

const Sun_time = ({ current_data }) => {
  // eslint-disable-next-line no-unused-vars

  return (
    <div id="Sun_time">
      <div>
        <img src="src\assets\sunny.png" />
        <p>{current_data ? current_data["sunrise"] : ""}</p>
      </div>
      <div>
        <img src="src\assets\sun.png" />
        <p>{current_data ? current_data["sunset"] : ""}</p>
      </div>
    </div>
  );
};

export default Sun_time;
