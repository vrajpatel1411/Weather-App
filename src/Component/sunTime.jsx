/* eslint-disable react/prop-types */
import getDate from "../Services/getDate";
const SunTime = ({ current_data, timezone }) => {
  return (
    <div
      id="Sun_time"
      className="w-fit h-fit bg-sky-200 rounded-md my-2 mx-auto  md:h-fit">
      <div className="flex flex-row gap-2 m-2 p-2 items-center">
        <img
          className="w-24 h-24 animate-sunrise-animation"
          src="src\assets\sunny.png"
        />
        <p>
          {current_data
            ? new Date(
                getDate({
                  weatherDate: current_data["sunrise"],
                  timeZone: timezone,
                })
              ).toLocaleTimeString("en-US")
            : ""}
        </p>
      </div>
      <div className="flex flex-row gap-2 m-2 p-2 items-center">
        <img
          className=" w-24 h-24 animate-sunset-animation"
          src="src\assets\sun.png"
        />
        <p>
          {current_data
            ? new Date(
                getDate({
                  weatherDate: current_data["sunset"],
                  timeZone: timezone,
                })
              ).toLocaleTimeString("en-US")
            : ""}
        </p>
      </div>
    </div>
  );
};

export default SunTime;
