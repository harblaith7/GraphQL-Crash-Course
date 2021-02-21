const { animals, categories } = require("../db");
const { v4 } = require('uuid')

const Mutation = {
    addAnimal(parent, args, ctx, info) {
      let newAnimal = {
        id: v4(),
        type: args.type,
        img: args.img,
        slug: args.slug,
        title: args.title,
        price: args.price,
        stock: args.stock,
        category: args.category
    }
    animals.push(newAnimal)

    return newAnimal
  }
}

module.exports = {
    Mutation
}