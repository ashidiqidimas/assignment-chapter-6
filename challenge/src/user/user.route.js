// Handle routing

const express = require("express");
const userServices = require("./user.service");
const userRouter = express.Router();

// API to get all users
userRouter.get('/', (req, res) => {
  const users = userServices.getAllUsers();

  res.json(users);
});

// API to create new user
userRouter.post("/", async (req, res) => {
  const  {username, password} = req.body;

  // res.send("ok");

  try {
    const newUser = await userServices.createNewUser(username, password);
    res.json(newUser);
  } catch (e) {
    res.status(400).send("Username already exist");
  }
});

userRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await userServices.deleteUser(id);
    res.send(`Success delete user with id ${id}`);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = { userRouter }