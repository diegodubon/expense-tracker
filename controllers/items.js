const Item = require("../models/Item");

const getItems = async (req, res) => {
  try {
    const items = await Item.findAll();

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

module.exports = {
  getItems
};
