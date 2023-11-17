import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./App.css";
import HeaderLocation from "./Component/headerLocation";
import getLocation from "./Services/getLocation";
import getWeather from "./Services/getWeather";
import CurrentTemp from "./Component/currentTemp";
import SunTime from "./Component/sunTime";
import CustomLoader from "./Component/CustomLoader";
import SnowImage from "../src/assets/Snow.jpg";
import RainImage from "../src/assets/Rain.png";
import CloudImage from "../src/assets/Cloud.jpeg";
import ClearImage from "../src/assets/clear.png";
function App() {
  const [location, updateLocation] = useState("Thunder Bay");
  // const [weatherData, setWeatherData] = useState(null);

  const {
    isLoading: isLoad,
    isError: isErr,
    data: locationData,
  } = useQuery({
    queryKey: ["location", location],
    queryFn: getLocation,
    select: (locationData) => locationData["coord"],
  });

  let content = "";

  if (isLoad) {
    content = <CustomLoader />;
  }
  if (isErr) {
    content = <h1>City Name Not Found</h1>;
  }

  // console.log("locationData", locationData);
  const { isSuccess, data: weatherData } = useQuery({
    queryKey: ["weatherData", locationData],
    queryFn: getWeather,
    enabled: !!locationData,
  });

  if (isSuccess) {
    content = (
      <div className="animate-pulses">
        <HeaderLocation
          location={location}
          time={weatherData ? weatherData["current"]["dt"] : null}
          timezone={weatherData ? weatherData["timezone"] : null}
        />
        <div className="max-w-screen-lg flex flex-col gap-4 mx-auto my-0 lg:flex-1 lg:flex-row">
          <CurrentTemp
            current_data={weatherData["current"]}
            timezone={weatherData ? weatherData["timezone"] : null}
          />
          <SunTime
            current_data={weatherData["current"]}
            timezone={weatherData ? weatherData["timezone"] : null}
          />
        </div>
      </div>
    );
  }
  const backgorund_image = () => {
    if (weatherData) {
      const main = weatherData["current"]["weather"][0].main;
      const weather_types = [
        { rain: ["Rain", "Drizzle", "Thunderstorm"] },
        { snow: ["Snow"] },
        {
          cloud: [
            "Mist",
            "Smoke",
            "Haze",
            "Dust",
            "Fog",
            "Sand",
            "Dust",
            "Ash",
            "Squall",
            "Tornado",
          ],
        },
      ];

      // Checking if 'main' exists in the 'rain' array

      let weatherImage = "";
      // Check for snow
      if (
        weather_types.some((obj) => "snow" in obj && obj.snow.includes(main))
      ) {
        weatherImage = SnowImage;
      } else if (
        weather_types.some((obj) => "rain" in obj && obj.rain.includes(main))
      ) {
        weatherImage = RainImage;
      }
      // Check for cloud
      else if (
        weather_types.some((obj) => "cloud" in obj && obj.cloud.includes(main))
      ) {
        weatherImage = CloudImage;
      }
      // Default to else condition
      else {
        weatherImage = ClearImage;
      }

      return weatherImage;
    }
    return;
  };
  let bg_image = "";
  if (isSuccess) {
    bg_image = backgorund_image();
  }
  return (
    <div
      className="bg-cover bg-fixed h-screen bg-opacity-0"
      style={{ backgroundImage: `url(${bg_image})` }}>
      <div className="max-w-screen-lg mx-3 my-0 lg:mx-auto">
        <div className="mt-10 mb-2 w-full ">
          <form
            className="flex items-center space-x-2 "
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              updateLocation(formData.get("location"));
            }}>
            <input
              className=" w-full flex-1 border rounded-md p-2 placeholder-gray-500 text-gray-500 sm:w-auto"
              type="text"
              id="location"
              name="location"
              required
              placeholder="Search City 'Thunder Bay'"></input>
            <button
              type="Submit"
              className="text-white bg-blue-500 p-2 rounded-md hover:bg-blue-800 hidden md:block">
              Search Weather
            </button>
            <button
              type="Submit"
              className="text-white bg-blue-500 p-2 rounded-md hover:bg-blue-800 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5  text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>

        {content}
      </div>
    </div>
  );
}

export default App;
