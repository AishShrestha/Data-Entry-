const express = require("express");
const app = express();
const controller = require("./controllers/userController");

// Middleware
app.use(express.json());

// Route handlers
app.route("/api/v1/users").get(controller.getAllUsers).post(controller.addUser);
app
  .route("/api/v1/users/:id")
  .patch(controller.updateUser)
  .delete(controller.deleteUser)
  .get(controller.getUser);

module.exports = app;
