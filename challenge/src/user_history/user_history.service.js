const userRepo = require("./user_history.repo");

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

const updatePassword = async (user_id, password) => {
  return await userRepo.repoUpdatePassword(user_id, password);
}

const userServices = {
  getAllUsers,
  createNewUser,
  deleteUser,
  updatePassword
}

module.exports = userServices;