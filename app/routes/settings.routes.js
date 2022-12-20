module.exports = app => {
  const settings = require("../controllers/setting.controller.js");

  var router = require("express").Router();

  // Retrieve all settings
  router.get("/", settings.getCapacity);


  app.use('/api/settings', router);
};
