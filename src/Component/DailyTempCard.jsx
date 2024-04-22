import getDate from "../Services/getDate";
import PropTypes from "prop-types";
const DailyTempCard = ({ dt, timezone }) => {
  let icon_url = "";
  let current_time = "";
  if (timezone) {
    current_time = new Date(
      getDate({ weatherDate: dt["dt"], timeZone: timezone })
    ).toDateString();
  }
  if (dt) {
    let weather = dt["weather"];
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
            <p className="text-lg font-medium text-center">{current_time}</p>
            <p className="text-lg font-medium text-center">
              {dt["weather"][0].main}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col  justify-center items-center mx-2 my-0 gap-1">
            <p>During Day, </p>
            <p className="text-3xl font-bold text-center">
              {Math.round(dt["temp"].day)} &deg;c{" "}
            </p>
            <p className="text-sm md:mx-2 font-medium text-center">
              Feels like {Math.round(dt["feels_like"].day)} &deg;c
            </p>
          </div>
          <div className="flex flex-col  justify-center items-center mx-2 my-0">
            <p>During Night, </p>
            <p className="text-3xl font-bold text-center">
              {Math.round(dt ? dt["temp"].night : null)} &deg;c{" "}
            </p>
            <p className="text-sm md:mx-2 font-medium text-center">
              Feels like {Math.round(dt ? dt["feels_like"].night : null)} &deg;c
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

DailyTempCard.propTypes = {
  dt: PropTypes.object.isRequired,
  timezone: PropTypes.string.isRequired,
};
export default DailyTempCard;
