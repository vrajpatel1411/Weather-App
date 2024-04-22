import DailyTempCard from "./DailyTempCard";
import PropTypes from "prop-types";
const DailyTemp = ({ data, timezone }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 grid-flow-row auto-rows-max ">
      {data
        ? data.map((d, index) => (
            <DailyTempCard
              key={index}
              dt={d}
              timezone={timezone}
            />
          ))
        : null}
    </div>
  );
};

DailyTemp.propTypes = {
  data: PropTypes.array.isRequired,
  timezone: PropTypes.string,
};

export default DailyTemp;
