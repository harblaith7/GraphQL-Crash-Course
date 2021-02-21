const { ApolloServer, gql } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Query } = require("./resolvers/Query")
const { Animal } = require("./resolvers/Animal")
const { Category } = require("./resolvers/Category")
const { Mutation } = require("./resolvers/Mutation")
const { animals, categories } = require("./db");

const server = new ApolloServer({ 
  typeDefs, 
  resolvers: {
    Query,
    Mutation,
    Animal,
    Category
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});``