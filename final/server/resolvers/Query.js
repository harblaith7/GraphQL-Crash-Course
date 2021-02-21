const { animals, categories, cards } = require("../db");

const Query = {
    animals(parent, args, ctx, info){
      return animals
    },
    animal(parent, args, ctx, info){
      return animals.find((animal) => {
        return animal.slug == args.slug
      })
    },
    categories(parent, args, ctx, info){
      return categories
    },
    category(parent, args, ctx, info){
      return categories.find((category) => {
        return category.slug == args.slug
      })
    },
    cards(parent, args, ctx, info){
        return cards
    }
}

module.exports = {
    Query
}