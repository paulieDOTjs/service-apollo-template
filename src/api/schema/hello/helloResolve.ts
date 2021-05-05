/* eslint-disable no-console */
import {
  helloNameArgs,
  espanolArgs,
  deutschArgs,
  italianoArgs,
  francaisArgs,
  portuguesArgs,
} from "./helloDef";

export const helloResolve = {
  Query: {
    // Resolvers are a function that is run to fetch the information for that field on the given type.
    // When it's a simple scalar with no arguments it can be returned directly.
    hello: () => "Hello, World",

    // the argument list for all resolvers are root, arguments, context, and info.

    // ROOT refers to the base object of that type.
    // This will be used often when traversing from one object type to another.

    // ARGUMENTS are the arguments passed in when the query was run by the client.

    // CONTEXT can be used to pass information to all queries
    // often used for passing around login information or used in data loader.

    // INFO contains information about the operation's execution state
    // this includes the field name, the path to the field from the root, etc.
    helloName: (root: any, args: helloNameArgs, ctx: any, info: any) => {
      console.log("root", root);
      console.log("args", args);
      console.log("ctx", ctx);
      console.log("info", info);

      return `Hello, ${capitalize(args.name)}!`;
    },

    // For object types an object must be given.
    // If there are no arguments and the object names are the exact same
    // as the GraphQL Schema it can be returned directly
    // this can be a json object from an http request for example
    aroundTheWorld: () => {
      const obj = {
        about:
          "You can say hello in other languages here! Maybe specify a name or two!",
        other: "this is another property",
      };
      return obj;
    },
  },

  // The name of the "Type" will be the parent object and the fields will be functions.
  // For properties on an object type that have arguments they need to be resolved with functions.
  Languages: {
    espanol: (_root: any, args: espanolArgs) => {
      return `Hola, ${capitalize(args.nombre) ?? "Mundo"}!`;
    },

    deutsch: (_root: any, args: deutschArgs) => {
      return `Hallo, ${capitalize(args.name) ?? "Welt"}!`;
    },

    italiano: (_root: any, args: italianoArgs) => {
      return `Ciao, ${capitalize(args.nome) ?? "Mondo"}!`;
    },

    francais: (_root: any, args: francaisArgs) => {
      return `Bonjour, ${capitalize(args.nom) ?? "le Monde"}!`;
    },

    portugues: (_root: any, args: portuguesArgs) => {
      return `Ola, ${capitalize(args.nome) ?? "Mundo"}!`;
    },
  },
};

// Capitalizes a string that is given
function capitalize(str: string | undefined) {
  return str
    ? str
        .split(" ")
        .map((sub) => {
          return sub[0].toUpperCase() + sub.substr(1);
        })
        .join(" ")
    : str;
}
