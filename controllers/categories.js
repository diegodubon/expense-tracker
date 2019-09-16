const Categorie = require("../models/Categorie");

const getCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll();

    res.json({
      categories,
      code: 200
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      error: error.message
    });
  }
};

const createCategorie = async (req, res) => {
  const name = req.body.name;

  if (!name) {
    return res.status(400).json({
      message: "categorie name is required.",
      code: 400
    });
  }
  try {
    const newCategorie = await Categorie.create({ name });
    res.json(newCategorie);
  } catch (error) {
    res.status(500).json({ message: error.message, code: 500 });
  }
};
module.exports = {
  getCategories,
  createCategorie
};
