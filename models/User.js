const Sequelize = require("sequelize");
const db = require("../sequelize");

const User = db.define("users", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

module.exports = User;
