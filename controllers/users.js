const User = require("../models/User");

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

module.exports = {
  getUsers
};
