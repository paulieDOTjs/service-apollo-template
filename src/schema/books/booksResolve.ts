import { authors, books } from "../../models/booksDB";

import { Resolvers } from "../../models/graphql";

export const booksResolve: Omit<Resolvers, "_Service"> = {
  Query: {
    books: (_, args) => {
      return books.filter((book) => {
        return args.searchTitle ? book.title.includes(args.searchTitle) : books;
      });
    },
  },
  Book: {
    author: (book) =>
      authors.find((auth) => auth.authorId === book.authorId) || null,
  },
};
