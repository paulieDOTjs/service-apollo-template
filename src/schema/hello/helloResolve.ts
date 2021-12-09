import {
  deutschArgs,
  espanolArgs,
  francaisArgs,
  helloNameArgs,
  italianoArgs,
  portuguesArgs,
} from "./helloDef";

export const helloResolve = {
  Query: {
    hello: () => "Hello, World",

    helloName: (_: any, args: helloNameArgs) => {
      return `Hello, ${capitalize(args.name)}!`;
    },

    aroundTheWorld: () => {
      const obj = {
        about:
          "You can say hello in other languages here! Maybe specify a name or two!",
        other: "this is another property",
      };
      return obj;
    },
  },

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
