var request = require('request');
// Retrieve capacity
exports.getCapacity = (req, res) => {
  res.send({ "capacity": 100 });
};

// Retrieve List of countries
exports.getCountries = (req, res) => {
  var options = {
    'method': 'GET',
    'url': 'https://countriesnow.space/api/v0.1/countries'

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    var countries = JSON.parse(response.body);
    res.send({ "countries": countries['data'] });
  });
};

// Retrieve List of countries
exports.getWeather = (req, res) => {
  var city = req.body.city;
  var options = {
    'method': 'GET',
    'url': 'https://api.weatherapi.com/v1/forecast.json?key=2791920e08254cd19e590131222012&q=' + city + '&days=10&aqi=no&alerts=no'

  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    var weather = JSON.parse(response.body);
    res.send(weather['forecast']);
  });
};

