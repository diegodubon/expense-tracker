require("dotenv/config");
const Sequelize = require("sequelize");
const express = require("express");

const app = express();

const appInit = async () => {
  try {
    const sequelize = new Sequelize(
      "postgres://hylagfku:WOd63CDTMrEGaEfSZxyIKW-b_athTQsR@salt.db.elephantsql.com:5432/hylagfku"
    );

    await sequelize.authenticate();
    app.listen(process.env.PORT, () => {
      console.log(`Server Running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("error", error);
  }
};

appInit();
