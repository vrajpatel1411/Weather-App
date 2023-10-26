import "./App.css";
import Homepage from "./Component/homepage";
import weather_data from "./Services/WeatherData";
import { useState } from "react";
import Current_temp from "./Component/Current_temp";

function App() {
  const weatherdata = useState(null);
  return (
    <>
      <weather_data.Provider value={weatherdata}>
        <Homepage />
        <Current_temp />
      </weather_data.Provider>
    </>
  );
}

export default App;
