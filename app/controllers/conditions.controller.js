const db = require("../models");
const Cond = db.conditions;
const Op = db.Sequelize.Op;

// Create and Save a new condition
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a conditions
  const Cond = {
    name: req.body.name,
    interval: req.body.interval,
    percentage: req.body.percentage,


  };

  // Save condition in the database
  Cond.create(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the condition."
      });
    });
};

// Retrieve all conditions from the database.
exports.findAll = (req, res) => {

  Cond.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving condition."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Cond.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find condition with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving condition with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Cond.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Condition was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Condition with id=${id}. Maybe Condition was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Condition with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Cond.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Condition was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Condition with id=${id}. Maybe Condition was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Condition with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Cond.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Conditions were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Conditions."
      });
    });
};


