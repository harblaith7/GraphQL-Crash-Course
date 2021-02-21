const { animals, categories } = require("../db");

const Animal = {
    category(parent, args, ctx, info) {
      return categories.find((category) => {
        return parent.category === category.id
      })
    }
  }

module.exports = {
    Animal
}