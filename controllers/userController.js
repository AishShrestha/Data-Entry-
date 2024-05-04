const client = require("./../db");

// Get all request
exports.getAllUsers = (req, res) => {
  const getUsersQuery = "SELECT * FROM users";

  client.query(getUsersQuery, (err, result) => {
    if (err) {
      console.error("Error executing query", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json({
      message: "success",
      data: {
        user: result.rows,
      },
    });
  });
};
// Post http request
exports.addUser = (req, res) => {
  const { username, email, address, phonenumber, id } = req.body;

  const insertUserQuery =
    "INSERT INTO users VALUES ($1, $2, $3, $4 ,$5) RETURNING *";
  const values = [username, email, address, phonenumber, id];

  client.query(insertUserQuery, values, (err, result) => {
    if (err) {
      console.error("Error executing query", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.status(201).json({
      status: "success",
      data: {
        user: result.rows[0],
      },
    });
  });
};
// Get one user
exports.getUser = (req, res) => {
  const id = req.params.id;

  const getOneUser = "SELECT * FROM users WHERE id = $1";
  const value = [id];

  client.query(getOneUser, value, (err, result) => {
    if (err) {
      console.error("Error executing query", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.status(200).json({
      status: "success",
      data: {
        user: result.rows[0],
      },
    });
  });
};
// Patch request
exports.updateUser = (req, res) => {
  const id = req.params.id;
  const { username, email, address, phonenumber } = req.body;

  const updateUser =
    "UPDATE users SET username = $1, email = $2, address = $3, phonenumber = $4 WHERE id = $5 RETURNING *";
  const values = [username, email, address, phonenumber, id];

  client.query(updateUser, values, (err, result) => {
    if (err) {
      console.error("Error executing query", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.status(200).json({
      status: "success",
      data: {
        user: result.rows[0],
      },
    });
  });
};

// Delete request
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const deleteUser = "DELETE FROM users WHERE id = $1";
  value = [id];

  client.query(deleteUser, value, (err, result) => {
    if (err) {
      console.error("Error executing query", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.status(200).json({
      status: "success",
      data: {
        user: null,
      },
    });
  });
};
