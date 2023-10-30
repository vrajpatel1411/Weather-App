import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import "./App.css";
import HeaderLocation from "./Component/headerLocation";

import getLocation from "./Services/getLocation";
import getWeather from "./Services/getWeather";
import CurrentTemp from "./Component/currentTemp";
import SunTime from "./Component/sunTime";
import CustomLoader from "./Component/CustomLoader";

function App() {
  const [location, updateLocation] = useState("Thunder Bay");
  const [weatherData, setWeatherData] = useState(null);

  // useEffect(() => {
  //   if (location) {
  //     const fetchWeatherData = async () => {
  //       try {
  //         const { lat, lon } = await getLocation(location);
  //         if (lat && lon) {
  //           const weatherDetails = await getWeather(lat, lon);
  //           if (weatherDetails) {
  //             SetWeatherData(weatherDetails);
  //           }
  //         }
  //       } catch {
  //         throw new Error("Something really bad going here");
  //       }
  //     };
  //     fetchWeatherData();
  //   }
  // }, [location]);

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
  const { isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["weatherData", locationData],
    queryFn: getWeather,
    enabled: !!locationData,
  });

  useEffect(() => {
    if (data) {
      setWeatherData(data);
    }
  }, [data]);
  if (isLoading) {
    content = <CustomLoader />;
  }
  if (isError) {
    content = <h1> Error....</h1>;
  }

  if (isSuccess) {
    content = (
      <div className="animate-main-content">
        <HeaderLocation
          location={location}
          time={weatherData ? weatherData["current"]["dt"] : null}
          timezone={weatherData ? weatherData["timezone"] : null}
        />
        <div className="flex flex-row gap-4">
          <CurrentTemp
            current_data={weatherData ? weatherData["current"] : null}
          />
          <SunTime current_data={weatherData ? weatherData["current"] : null} />
        </div>
      </div>
    );
  }

  return (
    <div className="w-10/12 mx-auto my-0">
      <div className="mt-10 mb-2 w-full ">
        <form
          className="flex gap-2 flex-row justify-center "
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            updateLocation(formData.get("location"));
          }}>
          <input
            className=" w-8/12 p-4 pl-10 text-md md:w-9/12 lg:w-10/12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            id="location"
            name="location"
            placeholder="Type city name"></input>
          <button
            type="Submit"
            className="text-white w-4/12 md:w-3/12 lg:w-2/12  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search Weather
          </button>
        </form>
      </div>

      {content}
    </div>
  );
}

export default App;
