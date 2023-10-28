// import { useEffect, useState } from "react";

function Homepage({ location, updateLocation }) {
  // eslint-disable-next-line no-unused-vars

  return (
    <div className="flex flex-col ">
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
      <div className="flex flex-row gap-2 items-center ">
        <img
          className="w-6 h-6"
          src="src/assets/home.png"></img>
        <h1 className="text-xl text-justify">{location}</h1>
      </div>
      <div>
        <h1> At </h1>
      </div>
    </div>
  );
}

export default Homepage;
