/* eslint-disable react/prop-types */
import getDate from "../Services/getDate";
const HeaderLocation = ({ location, time, timezone }) => {
  let current_time = "";
  if (time && timezone) {
    current_time = getDate({ weatherDate: time, timeZone: timezone });
  }
  return (
    <div className="flex flex-col mx-2">
      <div className="flex flex-row gap-2 items-center ">
        <img
          className="w-6 h-6"
          src="/assets/home.png"></img>
        <h1 className="text-xl text-justify">{location}</h1>
      </div>
      <div>
        <h1> At, {current_time} </h1>
      </div>
    </div>
  );
};

export default HeaderLocation;
