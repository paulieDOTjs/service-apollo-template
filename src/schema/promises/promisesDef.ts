import { gql } from "apollo-server-express";

export const promisesDef = gql`
  extend type Query {
    promise(milliseconds: Int = 1000): String
  }
`;

export interface promiseArgs {
  milliseconds: number;
}
