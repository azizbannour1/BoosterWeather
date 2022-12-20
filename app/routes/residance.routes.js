module.exports = app => {
  const residances = require("../controllers/residance.controller.js");

  var router = require("express").Router();

  // Create a new residance
  router.post("/", residances.create);

  // Retrieve all residance
  router.get("/", residances.findAll);

  // Retrieve a single residance with id
  router.get("/:id", residances.findOne);

  // Update a residance with id
  router.put("/:id", residances.update);

  // Delete a residance with id
  router.delete("/:id", residances.delete);

  // Delete all residance
  router.delete("/", residances.deleteAll);

  app.use('/api/residances', router);
};
