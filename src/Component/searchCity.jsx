import PropTypes from "prop-types";
const SearchCity = (props) => {
  return (
    <div className="mt-10 mb-2 w-full ">
      <form
        className="flex items-center space-x-2 "
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          props.updateLocation(formData.get("location"));
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
  );
};

SearchCity.propTypes = {
  updateLocation: PropTypes.func,
};
export default SearchCity;
