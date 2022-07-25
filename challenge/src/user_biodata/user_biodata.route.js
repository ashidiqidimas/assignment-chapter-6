const express = require("express");
const userServices = require("./user_biodata.service");
const userBiodataRouter = express.Router();

userBiodataRouter.get('/', (req, res) => {
  const users = userServices.getAllUsers();

  res.json(users);
});

userBiodataRouter.post("/", async (req, res) => {
  const  {username, password} = req.body;

  try {
    const newUser = await userServices.createNewUser(username, password);
    res.json(newUser);
  } catch (e) {
    res.status(400).send("Username already exist");
  }
});

userBiodataRouter.delete("/", async (req, res) => {
  const { user_id } = req.query;

  try {
    await userServices.deleteUser(user_id);
    res.send(`Success delete user with user id ${user_id}`);
  } catch (e) {
    res.status(400).send(e);
  }
});

userBiodataRouter.put("/", async (req, res) => {
  const { user_id, score } = req.query;

  try {
    await userServices.updateScore(user_id, score);
    res.send(`Success update user with user id ${user_id}`);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = { userBiodataRouter }