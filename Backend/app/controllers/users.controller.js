// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const config = require("../JWT/jwtsecret");
// const db = require("../models");
// const User = db.user;

// exports.signup = (req, res) => {
//   // Check if user already exists with the provided email
//   User.findOne({ where: { email: req.body.email } })
//     .then(user => {
//       if (user) {
//         return res.status(409).json({ message: "Email is already registered" });
//       }

//       // Hash the password
//       const hashedPassword = bcrypt.hashSync(req.body.password, 8);

//       // Create a new user
//       User.create({
//         username: req.body.username,
//         email: req.body.email,
//         password: hashedPassword
//       })
//         .then(user => {
//           const token = jwt.sign({ id: user.id }, config.secret, {
//             expiresIn: 86400 // Expires in 24 hours
//           });

//           res.status(201).json({ message: "User registered successfully", token });
//         })
//         .catch(err => {
//           res.status(500).json({ message: err.message });
//         });
//     })
//     .catch(err => {
//       res.status(500).json({ message: err.message });
//     });
// };

// exports.login = (req, res) => {
//   // Find the user with the provided email
//   User.findOne({ where: { email: req.body.email } })
//     .then(user => {
//       if (!user) {
//         return res.status(401).json({ message: "Invalid email or password" });
//       }

//       // Compare passwords
//       const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
//       if (!isPasswordValid) {
//         return res.status(401).json({ message: "Invalid email or password" });
//       }

//       // Generate JWT token
//       const token = jwt.sign({ id: user.id }, config.secret, {
//         expiresIn: 86400 // Expires in 24 hours
//       });

//       res.status(200).json({ message: "Logged in successfully", token });
//     })
//     .catch(err => {
//       res.status(500).json({ message: err.message });
//     });
// };
