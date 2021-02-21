const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    animals: [Animal!]!
    animal(slug: String!): Animal!
    categories: [Category!]!
    category(slug: String!): Category!
    cards: [Card!]!
  }

  type Mutation {
    addAnimal(
      title: String!,
      slug: String!,
      img: String!,
      price: String!
      stock: Int!
      type: String!
      category: String!
    ): Animal!
  }

  type Animal {
    id: ID!
    type: String!
    img: String!
    title: String!
    price: String!
    slug: String!
    stock: Int!
    category: Category
  }

  type Category {
    id: ID!
    category: String!
    img: String!
    slug: String!
    animals(type: String): [Animal!]!
  }

  type Card {
    id: ID!
    bought: Boolean!
    msg: String!
    price: Float!
    img: String!
    title: String!
  }
`

module.exports = {
  typeDefs
}


