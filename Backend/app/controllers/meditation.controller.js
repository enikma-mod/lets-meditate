const db = require("../models");
const Meditation = db.meditations;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a meditation
  // @POST
  const meditation = {
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    duration: req.body.duration,
    sounds: req.body.sounds,
    quotes: req.body.quotes
    //URL SOUNDS 
  };

  // Save Tutorial in the database
  Meditation.create(meditation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Meditation Category."
      });
    });
};

// Retrieve all Tutorials from the database.
// @GET
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Meditation.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Meditation Categories."
      });
    });
};

// Find a single Tutorial with an id
// @GET BY ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Meditation.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Meditation with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Meditation with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
// @UPDATE / PUT
exports.update = (req, res) => {
  const id = req.params.id;

  Meditation.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Meditation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Meditation with id=${id}. Maybe Meditation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Meditation with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
// @DELETE
exports.delete = (req, res) => {
  const id = req.params.id;

  Meditation.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Meditation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Meditation with id=${id}. Maybe Meditation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Meditation with id=" + id
      });
    });
};


// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Meditation.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Meditation."
      });
    });
}