let confi = {};

let NODE_ENV = process.env.NODE_ENV || "development";
if (NODE_ENV === "development") {
  require("dotenv/config");
  config = require("./config");
}
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./sequelize");

const itemsRouter = require("./routes/items");

const categoriesRouter = require("./routes/categories");
const usersRouter = require("./routes/users");
const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//routes
app.use("/api/items", itemsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/users", usersRouter);

//handling not found
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  res.status(404).json({
    message: "Not Found",
    code: 404
  });
});

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
