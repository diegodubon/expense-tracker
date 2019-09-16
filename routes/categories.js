const express = require("express");
const router = express.Router();

const { getCategories, createCategorie } = require("../controllers/categories");
router.get("/", getCategories);
router.post("/", createCategorie);

module.exports = router;
