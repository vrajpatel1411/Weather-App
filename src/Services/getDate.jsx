const getDate = ({ weatherDate, timeZone }) => {
  var utcSeconds = weatherDate;
  var d = new Date(0);
  d.setUTCSeconds(utcSeconds);
  d = d.toLocaleString("en-US", {
    timeZone,
  });
  return new Date(d).toLocaleString();
};

export default getDate;
