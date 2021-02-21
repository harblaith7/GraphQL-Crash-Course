const { animals, categories } = require("../db");

const Category = {
    animals(parent, args, ctx, info) {
      return animals.filter((animal) => {
        return parent.id === animal.category
      })
    }
  }

module.exports = {
    Category
}