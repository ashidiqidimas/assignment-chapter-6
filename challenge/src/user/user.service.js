// Handle business logic

const userRepo = require("./user.repo");

const getAllUsers = async () => {
  return await userRepo.repoGetAllUsers();
}

const createNewUser = async (username, password) => {
  const userExist = userRepo.repoFindAUser(username);

  if (userExist) {
    // return 'User is already exist';
    throw "User already exist";
  } else {
    return await userRepo.repoCreateNewUser(username, password);
  }
};

const deleteUser = async (id) => {
  // try {
    return await userRepo.repoDeleteUser(id);
  // } catch (e) {
  //   throw e;
  // }
}

const userServices = {
  getAllUsers,
  createNewUser,
  deleteUser
}

module.exports = userServices;