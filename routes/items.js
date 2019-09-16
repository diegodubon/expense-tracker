const express = require("express");
const router = express.Router();

const { getItems } = require("../controllers/items");
router.get("/", getItems);

module.exports = router;
