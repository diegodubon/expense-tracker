require("dotenv/config");
const Sequelize = require("sequelize");
const express = require("express");

const app = express();
const config = require("./config");
const appInit = async () => {
  try {
    const sequelize = new Sequelize(config.dev.db.uri);

    await sequelize.authenticate();
    app.listen(process.env.PORT, () => {
      console.log(`Server Running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("error", error);
  }
};

appInit();
