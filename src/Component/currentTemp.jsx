/* eslint-disable react/prop-types */
const CurrentTemp = ({ current_data }) => {
  let icon_url = "";
  if (current_data) {
    let weather = current_data["weather"];
    console.log(current_data);
    icon_url = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  }

  return (
    <div
      id="current_information"
      className="w-6/12 bg-sky-200 rounded-md p-3 my-4">
      <div
        id="temperature"
        className="flex flex-row gap-4 items-center my-2">
        <div
          id="temp_icon"
          className="mx-auto my-0">
          <img
            className=" w-35 h-35 mx-auto my-0"
            src={icon_url}
            alt="Temp Icon"></img>
          <p className="text-lg font-medium">
            Weather Description :
            {current_data ? " " + current_data["weather"][0].description : ""}
          </p>
        </div>
        <div className="flex flex-row mx-auto my-0">
          <p className="text-6xl">{Math.round(current_data["temp"])} &deg;c </p>
          <p className="text-lg font-medium mx-2">
            Feels like {Math.round(current_data["feels_like"])} &deg; c
          </p>
        </div>
      </div>
      <div
        id="other_temperature"
        className="flex flex-row justify-center my-2 mx-2 gap-10">
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
