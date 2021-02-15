const { ApolloServer, gql } = require('apollo-server');
const { typeDefs } = require('./schema');
const { Query } = require("./resolvers/Query")

const server = new ApolloServer({ typeDefs, resolvers: {
    Query
} });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});``