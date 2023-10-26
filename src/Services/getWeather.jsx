import API_KEY from "../config";
const getWeather = (lat, lon) => {
  return fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
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
