import API_KEY from "../config";
const getLocation = async ({ queryKey }) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${queryKey[1]}&appid=${API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error in fetching");
      }
      return response.json();
    })
    .catch((e) => {
      throw new Error(e);
    });
};

export default getLocation;
