const Sequelize = require("sequelize");
const db = require("../sequelize");

const Category = require("./Categorie");
const User = require("./User");
const Item = db.define("items", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  categoryId: {
    type: Sequelize.INTEGER,
    references: "categories",
    referencesKey: "id"
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.ENUM,
    values: ["income", "expense", "transfer"]
  },
  userId: {
    type: Sequelize.INTEGER,
    references: "users",
    referencesKey: "id"
  },
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  }
});

Item.belongsTo(Category, { foreignKey: "categoryId" });
Item.belongsTo(User, { foreignKey: "userId" });
module.exports = Item;
