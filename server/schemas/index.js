const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const { makeExecutableSchema } = require('apollo-server');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports = { typeDefs, resolvers };