const { ApolloServer, gql } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Query } = require("./resolvers/Query")
const { db } = require("./db")

const server = new ApolloServer({ 
  typeDefs, 
  resolvers: {
    Query
  },
  context: {
    db
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});``