import CurrentTemp from "../Component/currentTemp";
import SunTime from "../Component/sunTime";
import HeaderLocation from "../Component/headerLocation";
import DailyTemp from "../Component/dailyTemp";
import PropTypes from "prop-types";

const MainContent = ({ weatherData, location }) => {
  return (
    <div className="animate-pulse-animation">
      <HeaderLocation
        location={location}
        time={weatherData ? weatherData["current"]["dt"] : null}
        timezone={weatherData ? weatherData["timezone"] : null}
      />
      <div className="max-w-screen-lg flex flex-col gap-4 mx-auto my-0 lg:flex-1 lg:flex-row">
        <CurrentTemp
          current_data={weatherData["current"]}
          timezone={weatherData ? weatherData["timezone"] : null}
        />
        <SunTime
          current_data={weatherData["current"]}
          timezone={weatherData ? weatherData["timezone"] : null}
        />
      </div>
      <div className="max-w-screen-lg flex flex-col gap-4 mx-auto my-0 lg:flex-1 lg:flex-row">
        <DailyTemp
          data={weatherData ? weatherData["daily"] : null}
          timezone={weatherData ? weatherData["timezone"] : null}
        />
      </div>
    </div>
  );
};

MainContent.propTypes = {
  weatherData: PropTypes.object,
  location: PropTypes.string,
};

export default MainContent;
