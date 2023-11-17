/* eslint-disable react/prop-types */

const CurrentTemp = ({ current_data }) => {
  let icon_url = "";
  if (current_data) {
    let weather = current_data["weather"];

    icon_url = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  }

  return (
    <div
      id="current_information"
      className="w-auto flex-1 h-fit bg-sky-200 rounded-md p-1 my-2">
      <div
        id="temperature"
        className="flex flex-row  gap-4 justify-center items-center my-2">
        <div
          id="temp_icon"
          className="mx-2 my-0">
          <img
            className=" w-24 h-24 mx-auto my-0"
            src={icon_url}
            alt="Temp Icon"></img>

          <div
            id="weather_Description"
            className="flex flex-col  items-center ">
            <p className="text-lg font-medium text-center">
              Weather Description
            </p>
            <p className="text-lg font-semibold text-center">
              {current_data
                ? " " + current_data["weather"][0].description.toUpperCase()
                : ""}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mx-2 my-0">
          <p className="text-3xl font-bold text-center">
            {Math.round(current_data["temp"])} &deg;c{" "}
          </p>
          <p className="text-sm md:mx-2 font-medium text-center">
            Feels like {Math.round(current_data["feels_like"])} &deg;c
          </p>
        </div>
      </div>
      <div
        id="other_temperature"
        className="flex flex-row flex-wrap justify-center my-3 mx-3 gap-10">
        <div
          id="current_humidity"
          className="flex flex-col items-center ">
          <p className="text-lg font-medium">Humidity</p>
          <p className="text-lg font-semibold">{current_data["humidity"]} %</p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="text-lg font-medium">Pressure</p>
          <p className="text-lg font-semibold">
            {current_data["pressure"]} hPa
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="text-lg font-medium">Wind Speed </p>
          <p className="text-lg font-semibold">
            {Math.round(current_data["wind_speed"] * 3.6, 2)} km/hr
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <p className="text-lg font-medium">Wind Direction</p>
          <p className="text-lg font-semibold">
            {" "}
            {current_data["wind_deg"]} &deg;
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentTemp;
