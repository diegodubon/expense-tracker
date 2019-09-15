let confi = {};

let NODE_ENV = process.env.NODE_ENV || "development";
if (NODE_ENV === "development") {
  require("dotenv/config");
  config = require("./config");
}

const db = require("./sequelize");
const express = require("express");

const app = express();

const appInit = async () => {
  try {
    const { PORT } = config;

    await db.authenticate().catch(error => {
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
