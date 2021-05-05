import { gql } from "apollo-server-express";

// Declare the GraphQL types inside of the gql string.
// The Apollo GraphQL extension might come in handy here
// https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo
export const helloDef = gql`
  type Query {
    hello: String
    helloName(name: String!): String
    aroundTheWorld: Languages
  }

  type Languages {
    about: String
    other: String
    espanol(nombre: String): String
    deutsch(name: String): String
    italiano(nome: String): String
    francais(nom: String): String
    portugues(nome: String): String
  }
`;

//I, personally, like to create interfaces for for each of the arguments of the types to make resolvers easier.
export interface helloNameArgs {
  name: string;
}
export interface espanolArgs {
  nombre?: string;
}
export interface deutschArgs {
  name?: string;
}
export interface italianoArgs {
  nome?: string;
}
export interface francaisArgs {
  nom?: string;
}
export interface portuguesArgs {
  nome?: string;
}
