import { gql } from "apollo-server-express";

export const bookDef = gql`
  type Author {
    id: Int!
    name: String!
    books: [Book]
  }

  type Book {
    id: Int!
    title: String!
    author: Author
  }

  type Query {
    books(searchTitle: String): [Book]
  }
`;
