const db = require("../models");
const Residance = db.residances;
const Op = db.Sequelize.Op;

// Create and Save a new Residance
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Residance
  const residance = {
    name: req.body.name,
    bedTime: req.body.bedTime,

  };

  // Save Residance in the database
  Residance.create(residance)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Residance."
      });
    });
};

// Retrieve all Residances from the database.
exports.findAll = (req, res) => {

  Residance.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Residances."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Residance.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Residance with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Residance with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Residance.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Residance was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Residance with id=${id}. Maybe Residance was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Residance with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Residance.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Residance was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Residance with id=${id}. Maybe Residance was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Residance with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Residance.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Residances were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Residances."
      });
    });
};


