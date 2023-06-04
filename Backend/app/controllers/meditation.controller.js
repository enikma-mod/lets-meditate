// const pool = require('./db');

// const getCategories = (request, response) => {
//   pool.query('SELECT * FROM categories ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

// const getCategoryById = (request, response) => {
//   const id = parseInt(request.params.id);

//   pool.query('SELECT * FROM categories WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

// const createCategory = (request, response) => {
//   const { title, description, duration, image } = request.body;

//   pool.query(
//     'INSERT INTO categories (title, description, duration, image) VALUES ($1, $2, $3, $4)',
//     [title, description, duration, image],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(201).send(`Category added with ID: ${results.insertId}`);
//     }
//   );
// };

// const updateCategory = (request, response) => {
//   const id = parseInt(request.params.id);
//   const { title, description, duration, image } = request.body;

//   pool.query(
//     'UPDATE categories SET title = $1, description = $2, duration = $3, image = $4 WHERE id = $5',
//     [title, description, duration, image, id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`Category modified with ID: ${id}`);
//     }
//   );
// };

// const deleteCategory = (request, response) => {
//   const id = parseInt(request.params.id);

//   pool.query('DELETE FROM categories WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).send(`Category deleted with ID: ${id}`);
//   });
// };

// module.exports = {
//   getCategories,
//   getCategoryById,
//   createCategory,
//   updateCategory,
//   deleteCategory,
// };


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
  const meditation = {
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    duration: req.body.duration
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

// Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
  
// };

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