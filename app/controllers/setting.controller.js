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

