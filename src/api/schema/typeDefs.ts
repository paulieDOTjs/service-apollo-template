import { helloDef } from "./hello/helloDef";
import { promisesDef } from "./promises/promisesDef";

// import all the type definitions created and add to this array.
// this will be exported and added to the schema of GraphQL
export const typeDefs = [helloDef, promisesDef];
