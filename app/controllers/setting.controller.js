const db = require("../models");
const Setting = db.settings;


// Retrieve all Settings from the database.
exports.findAll = (req, res) => {

  Residance.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Settings."
      });
    });
};

