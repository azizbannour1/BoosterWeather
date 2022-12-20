module.exports = app => {
    const conditions = require("../controllers/conditions.controller.js");

    var router = require("express").Router();

    // Create a new condition
    router.post("/", conditions.create);

    // Retrieve all condition
    router.get("/", conditions.findAll);

    // Retrieve a single condition with id
    router.get("/:id", conditions.findOne);

    // Update a condition with id
    router.put("/:id", conditions.update);

    // Delete a condition with id
    router.delete("/:id", conditions.delete);

    // Delete all condition
    router.delete("/", conditions.deleteAll);

    app.use('/api/conditions', router);
};
