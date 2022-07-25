const express = require("express");
const userServices = require("./user_history.service");
const userHistoryRouter = express.Router();

userHistoryRouter.get('/', (req, res) => {
  const users = userServices.getAllUsers();

  res.json(users);
});

userHistoryRouter.post("/", async (req, res) => {
  const  {username, password} = req.body;

  try {
    const newUser = await userServices.createNewUser(username, password);
    res.json(newUser);
  } catch (e) {
    res.status(400).send("Username already exist");
  }
});

userHistoryRouter.delete("/", async (req, res) => {
  const { user_id } = req.query;

  try {
    await userServices.deleteUser(user_id);
    res.send(`Success delete user with user id ${user_id}`);
  } catch (e) {
    res.status(400).send(e);
  }
});

userHistoryRouter.put("/", async (req, res) => {
  const { user_id, password } = req.query;

  try {
    await userServices.updatePassword(user_id, password);
    res.send(`Success update user with user id ${user_id}`);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = { userHistoryRouter }