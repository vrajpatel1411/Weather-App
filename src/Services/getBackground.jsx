import SnowImage from "../assets/Snow.jpg";
import RainImage from "../assets/Rain.png";
import CloudImage from "../assets/Cloud.jpeg";
import ClearImage from "../assets/clear.png";
const backgorund_image = (weatherData) => {
  if (weatherData) {
    const main = weatherData["current"]["weather"][0].main.toLowerCase();
    console.log(main);
    const weather_types = [
      { rain: ["rain", "drizzle", "thunderstorm"] },
      { snow: ["snow"] },
      {
        cloud: [
          "mist",
          "smoke",
          "haze",
          "dust",
          "fog",
          "sand",
          "dust",
          "ash",
          "squall",
          "tornado",
          "clouds",
        ],
      },
    ];

    // Checking if 'main' exists in the 'rain' array

    let weatherImage = "";
    // Check for snow
    if (weather_types.some((obj) => "snow" in obj && obj.snow.includes(main))) {
      weatherImage = SnowImage;
    } else if (
      weather_types.some((obj) => "rain" in obj && obj.rain.includes(main))
    ) {
      weatherImage = RainImage;
    }
    // Check for cloud
    else if (
      weather_types.some((obj) => "cloud" in obj && obj.cloud.includes(main))
    ) {
      weatherImage = CloudImage;
    }
    // Default to else condition
    else {
      weatherImage = ClearImage;
    }

    return weatherImage;
  }
};

export default backgorund_image;
