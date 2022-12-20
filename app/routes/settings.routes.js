module.exports = app => {
  const settings = require("../controllers/setting.controller.js");

  var router = require("express").Router();

  // Retrieve all settings
  router.get("/", settings.getCapacity);

  // Retrieve all countries
  router.get("/countries", settings.getCountries);

  // Retrieve all weather
  router.post("/weather", settings.getWeather);


  app.use('/api/settings', router);
};
