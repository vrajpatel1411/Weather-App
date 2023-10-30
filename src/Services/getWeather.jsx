import API_KEY from "../config";
const getWeather = ({ queryKey }) => {
  let lat = queryKey[1]["lat"];
  let lon = queryKey[1]["lon"];

  return fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch(() => {
      console.log("Error by catch block");
    });
};
export default getWeather;
