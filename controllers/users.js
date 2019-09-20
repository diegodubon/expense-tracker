const User = require("../models/User");
const { isEmpty, isNumber } = require("lodash");
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    res.json({
      users,
      code: 200
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      error: error.message
    });
  }
};

const createUser = async (req, res) => {
  const { name } = req.body;

  if (isEmpty(name)) {
    const badRequest = 400;
    return res.status(badRequest).json({
      message: "user name field is required",
      code: badRequest
    });
  }
  try {
    const newUser = await User.findOrCreate({ where: { name } });

    console.log({ newUser });

    res.json(newUser[0]);
  } catch (error) {
    console.error(error);
    res.json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  let { id } = req.params;

  id = parseInt(id, 10);

  if (!isNumber(id)) {
    return res.json({ message: "id must be number type value" });
  }
  try {
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        code: 404
      });
    }
    console.log(user);

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.json({ message: error.message });
  }
};
module.exports = {
  getUserById,
  getUsers,
  createUser
};
