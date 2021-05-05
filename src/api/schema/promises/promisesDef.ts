import { gql } from "apollo-server-express";

// Declare the GraphQL types inside of the gql string.
// The Apollo GraphQL extension might come in handy here
// https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo
export const promisesDef = gql`
  extend type Query {
    promise(milliseconds: Int = 1000): String
    getCatFacts: [String]
  }
`;

//I like to create interfaces for for each of the arguments of the types to make resolvers easier.
export interface promiseArgs {
  milliseconds: number;
}
