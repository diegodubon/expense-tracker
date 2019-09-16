const Sequelize = require("sequelize");
const { DB_URI } = require("./config");
const sequelize = new Sequelize(DB_URI, {
  define: {
    timestamps: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;
