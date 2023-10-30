/* eslint-disable react/prop-types */

const SunTime = ({ current_data }) => {
  return (
    <div
      id="Sun_time"
      className="w-5/12 bg-sky-200 rounded-md p-3 my-4 ">
      <div className="flex flex-row">
        <img
          className="w-35 h-35"
          src="src\assets\sunny.png"
        />
        <p>{current_data ? current_data["sunrise"] : ""}</p>
      </div>
      <div>
        <img
          className="w-35 h-35"
          src="src\assets\sun.png"
        />
        <p>{current_data ? current_data["sunset"] : ""}</p>
      </div>
    </div>
  );
};

export default SunTime;
