module.exports = app => {
    const meditations = require("../controllers/meditation.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", meditations.create);
  
    // Retrieve all meditations
    router.get("/", meditations.findAll);
  
    // Retrieve all published meditations
    router.get("/published", meditations.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", meditations.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", meditations.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", meditations.delete);
  
    // Create a new Tutorial
    // router.delete("/", meditations.deleteAll);
  
    app.use('/api/meditations', router);
  };