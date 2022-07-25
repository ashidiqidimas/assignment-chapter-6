const userRepo = require("./user_biodata.repo");

const getAllUsers = async () => {
  return await userRepo.repoGetAllUsers();
}

const createNewUser = async (username, password) => {
  const userExist = userRepo.repoFindAUser(username);

  if (userExist) {
    throw "User already exist";
  } else {
    return await userRepo.repoCreateNewUser(username, password);
  }
};

const deleteUser = async (user_id) => {
    return await userRepo.repoDeleteUser(user_id);
}

const updateScore = async (user_id, score) => {
  return await userRepo.repoUpdateScore(user_id, score);
}

const userServices = {
  getAllUsers,
  createNewUser,
  deleteUser,
  updateScore
}

module.exports = userServices;