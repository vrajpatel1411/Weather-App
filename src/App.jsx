import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./App.css";
import MainContent from "../src/Layout/mainContent";
import getLocation from "./Services/getLocation";
import getWeather from "./Services/getWeather";
// import backgorund_image from "./Services/getBackground";
import SearchCity from "./Component/searchCity";
import CustomLoader from "./Component/CustomLoader";

function App() {
  const [location, updateLocation] = useState("Thunder Bay");

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
    console.log(isErr);
    content = <h1>City Name Not Found</h1>;
  }
  const {
    isLoading,
    isSuccess,
    data: weatherData,
  } = useQuery({
    queryKey: ["weatherData", locationData],
    queryFn: getWeather,
    enabled: !!locationData,
  });
  if (isLoading) {
    content = <CustomLoader />;
  }
  // let bg_image = "";
  if (isSuccess) {
    if (weatherData) {
      // bg_image = backgorund_image(weatherData);
      content = (
        <MainContent
          weatherData={weatherData}
          location={location}
        />
      );
    }
  }

  return (
    <div className="bg-cover absolute top-0 w-full bg-fixed h-full bg-opacity-0">
      {/* // style={{ backgroundImage: `url(${bg_image})` }} */}
      <div className="max-w-screen-lg mx-3 my-0 lg:mx-auto">
        <SearchCity updateLocation={updateLocation} />
        {content}
      </div>
    </div>
  );
}

export default App;
