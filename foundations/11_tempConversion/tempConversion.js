const convertToCelsius = function(tempF) {
  let res = (tempF - 32) * (5/9);
  return Math.round(res * 10) / 10; //convert to 1 decimal place too remember that
};

const convertToFahrenheit = function(tempC) {
  let res = (tempC * 5/9 + 32);
  return Math.round(res * 10) / 10; //also convert to 1 decimal place
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
