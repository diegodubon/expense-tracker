let confi = {};

let NODE_ENV = process.env.NODE_ENV || "development";
if (NODE_ENV === "development") {
  require("dotenv/config");
  config = require("./config");
  config = config["dev"];
}

const Sequelize = require("sequelize");
const express = require("express");

const app = express();

const appInit = async () => {
  try {
    const { DB_URI, PORT } = config;
    console.log(config);
    const sequelize = new Sequelize(DB_URI, {
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });

    await sequelize.authenticate().catch(error => {
      console.error("Unable to connect to the database:", err);
    });
    console.log("Connection has been established successfully.");
    app.listen(PORT, () => {
      console.log(`Server Running on ${PORT}`);
    });
  } catch (error) {
    console.error("error", error);
  }
};

appInit();
