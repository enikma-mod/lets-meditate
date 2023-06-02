const db = require("../models");
const Meditation = db.meditations;
const Op = db.Sequelize.Op;

// Create and Save a new Meditation
// @POST METHOD
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Meditation
  //title, description, duration_minutes, image_url - MODEL
  const meditation = {
    title: req.body.title,
    description: req.body.description,
    duration_minutes: req.body.duration_minutes,
    image_url: req.body.image_url
  };

  // Save Meditation in the database
  Meditation.create(meditation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Meditation."
      });
    });
};

// Retrieve all Meditations from the database.
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
            err.message || "Some error occurred while retrieving Meditations."
        });
      });
};

// Find a single Meditation with an id
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

// Update a Meditation by the id in the request
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

// Delete a Meditation with the specified id in the request
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

// Delete all Meditations from the database.
// exports.deleteAll = (req, res) => {
  
// };

// Find all published Meditations
exports.findAllPublished = (req, res) => {
    Meditation.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving meditations."
      });
    });
};