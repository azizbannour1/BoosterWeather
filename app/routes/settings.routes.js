module.exports = app => {
  const settings = require("../controllers/setting.controller.js");

  var router = require("express").Router();

  // Retrieve all settings
  router.get("/", settings.getCapacity);

  // Retrieve all settings
  router.get("/countries", settings.getCountries);


  app.use('/api/settings', router);
};
