const {user_game} = require('../database/models');

const repoGetAllUsers = async () => {
  return await user_game.findAll();
};

const repoFindAUser = async (username) => {
  return await user_game.findOne({
    where: {username: username},
  });
};

const repoCreateNewUser = async (username, password) => {
  await user_game.create({
    username: username,
    password: password,
  });
};

const repoDeleteUser = async (user_id) => {
  return await user_game.destroy({
    where: {user_id: user_id}
  });
}

const repoUpdatePassword = async (user_id, password) => {
  return user_game.update({
    password: password,
  }, {
    where: {user_id: user_id},
  });
}

const userRepo = {
  repoGetAllUsers,
  repoCreateNewUser,
  repoFindAUser,
  repoDeleteUser,
  repoUpdatePassword
};

module.exports = userRepo;