import "./App.css";
import Homepage from "./Component/homepage";
// import Location_context from "./Services/Location_context";
import { useState, useEffect } from "react";
import getLocation from "./Services/getLocation";
import getWeather from "./Services/getWeather";
// import { useQuery } from "@tanstack/react-query";
import Current_temp from "./Component/Current_temp";
import Sun_time from "./Component/Sun_time";

function App() {
  const [location, UpdateLocation] = useState("Thunder Bay");
  const [weatherData, SetWeatherData] = useState(null);

  useEffect(() => {
    if (location) {
      const fetchWeatherData = async () => {
        try {
          const { lat, lon } = await getLocation(location);
          if (lat && lon) {
            const weatherDetails = await getWeather(lat, lon);
            if (weatherDetails) {
              SetWeatherData(weatherDetails);
            }
          }
        } catch {
          throw new Error("Something really bad going here");
        }
      };
      fetchWeatherData();
    }
  }, [location]);

  return (
    <div className="w-10/12 mx-auto my-0">
      {/* <Location_context.Provider value={location}> */}
      <Homepage
        location={location}
        updateLocation={UpdateLocation}
      />
      <div>
        <Current_temp
          current_data={weatherData ? weatherData["current"] : null}
        />
        <Sun_time current_data={weatherData ? weatherData["current"] : null} />
      </div>
      {/* </Location_context.Provider> */}
    </div>
  );
}

export default App;
