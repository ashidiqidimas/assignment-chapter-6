const userRepo = require("./user.repo");

const getAllUsers = async () => {
  return await userRepo.repoGetAllUsers();
}

const createNewUser = async (username, password, email) => {
  const userExist = userRepo.repoFindAUser(username);

  if (userExist) {
    throw "User already exist";
  } else {
    return await userRepo.repoCreateNewUser(username, password, email);
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