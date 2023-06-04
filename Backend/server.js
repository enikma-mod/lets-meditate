const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();



var corsOptions = {
  origin: "*"
};

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  })

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Let's meditate" });
});


require("./app/routes/meditation.routes")(app);


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

