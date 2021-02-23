const { v4 } = require("uuid")

const Mutation = {
    addAnimal: (parent, {image, title, rating, price, description, slug, stock, onSale, category}, {animals}) => {
        let newAnimal = {
            id: v4(),
            image,
            title,
            rating,
            price,
            description,
            slug,
            stock,
            onSale,
            category,
        }

        animals.push(newAnimal)
        
        return newAnimal
    },

    removeAnimal: (parent, { id }, { animals }) => {
        let index = animals.findIndex((animal) => {
            return animal.id === id
        });

        animals.splice(index, 1);

        return true
    }
}

module.exports = Mutation

// type Animal {
//     id: ID!
//     image: String!
//     title: String!
//     rating: Float
//     price: String!
//     description: [String!]!
//     slug: String!
//     stock: Int!
//     onSale: Boolean
//     category: Category
// }