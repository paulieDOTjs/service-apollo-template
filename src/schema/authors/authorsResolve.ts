import { authors, books } from "../../models/booksDB";

import { Resolvers } from "../../models/graphql";

export const authorsResolve: Omit<Resolvers, "_Service"> = {
  Query: {
    authors: (_, args) => {
      return authors.filter((auth) => {
        return args.name ? auth.name.includes(args.name) : authors;
      });
    },
  },

  Author: {
    id: (author) => author.authorId,
    books: (author) =>
      books.filter((book) => book.authorId === author.authorId),
  },
};
