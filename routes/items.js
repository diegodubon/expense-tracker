const express = require("express");
const router = express.Router();

const { getItems, postItem } = require("../controllers/items");
router.get("/", getItems);

router.post("/", postItem);
module.exports = router;
