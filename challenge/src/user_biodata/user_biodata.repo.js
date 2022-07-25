const {user_game_biodata} = require('../database/models');

const repoGetAllUsers = async () => {
  return await user_game_biodata.findAll();
};

const repoFindAUser = async (username) => {
  return await user_game.findOne({
    where: {username: username},
  });
};

const repoCreateNewUser = async (username, password) => {
  await user_game_biodata.create({
    username: username,
    password: password,
  });
};

const repoDeleteUser = async (user_id) => {
  return await user_game_biodata.destroy({
    where: {user_id: user_id}
  });
}

const repoUpdateScore = async (user_id, score) => {
  return user_game_biodata.update({
    score: score,
  }, {
    where: {user_id: user_id},
  });
}

const user_biodataRepo = {
  repoGetAllUsers,
  repoCreateNewUser,
  repoFindAUser,
  repoDeleteUser,
  repoUpdateScore
};

module.exports = user_biodataRepo;