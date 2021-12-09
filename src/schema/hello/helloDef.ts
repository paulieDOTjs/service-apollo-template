import { gql } from "apollo-server-express";

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
