const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Animal {
    title: String
    price: String
    img: String
  }
  type Query {
    books: [Book]
    animals: [Animal]
  }
`;

module.exports = {
  typeDefs
}