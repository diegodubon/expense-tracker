const Sequelize = require("sequelize");
const db = require("../sequelize");

const Categorie = db.define("categories", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

module.exports = Categorie;
