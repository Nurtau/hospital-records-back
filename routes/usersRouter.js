const express = require("express");
const usersController = require("../controllers/usersController");

const router = express.Router();

router.get("/users", usersController.getUsers);
router.post("/users", usersController.createUser);
router.put("/users/:email", usersController.updateUser);
router.delete("/users/:email", usersController.deleteUser);

module.exports = router;


