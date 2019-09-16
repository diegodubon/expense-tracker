const Categorie = require("../models/Categorie");

const { isEmpty } = require("lodash");
const getCategories = async (req, res) => {
  try {
    const { type } = req.query;

    let where = {};

    if (!isEmpty(type)) {
      where.type = type;
    }
    const categories = await Categorie.findAll({ where });

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

const createCategorie = (req, res) => {
  const { name, type } = req.body;

  if (isEmpty(name)) {
    return res.status(400).json({
      message: "categorie name is required.",
      code: 400
    });
  }

  if (isEmpty(type)) {
    return res.status(400).json({
      message: "type is required.",
      code: 400
    });
  }

  Categorie.create({ name, type })
    .then(categorie => res.status(200).json(categorie))
    .catch(error => res.status(500).json({ message: error.message }));
};
module.exports = {
  getCategories,
  createCategorie
};
