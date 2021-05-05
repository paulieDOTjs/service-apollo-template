import { makeExecutableSchema } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

// This takes in all type defs from the array in /typeDefs/typeDefs
// and the resolvers from the object in ./resolvers/resolvers
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
