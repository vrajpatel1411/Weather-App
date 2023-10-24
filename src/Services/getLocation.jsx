const getLocation = (location) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7f51b6111d82570a16630d07b316565f`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error in fetching");
      }
      return response.json();
    })
    .then((data) => {
      const lat = data.coord.lat;
      const lon = data.coord.lon;

      return { lat, lon };
    })
    .catch((e) => {
      console.log(e);
    });
};

export default getLocation;
