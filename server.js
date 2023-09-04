const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const PrestaShopAPI = require('./datasources/prestaShopAPI'); // Replace with your data source implementation

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    prestaShopAPI: new PrestaShopAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
