const Item = require("../models/Item");
const validateInput = require("../helpers/validateData");

const Category = require("../models/Categorie");
const getItems = async (req, res) => {
  const { userId } = req.query;
  try {
    const items = await Item.findAll({
      include: [Category]
    });

    res.json({
      items,
      code: 200
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      error: error.message
    });
  }
};

const postItem = async (req, res) => {
  const { name, description, amount, categoryId, type, userId } = req.body;

  console.log({ name, description, amount, categoryId, type });

  if (validateInput({ name, description, amount, categoryId, type, userId })) {
    return res.status(400).json({
      message: "missing fields"
    });
  }

  try {
    const newItem = await Item.create({
      userId,
      name,
      description,
      amount,
      categoryId,
      type
    });
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getItems,
  postItem
};
