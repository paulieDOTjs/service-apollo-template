import axios from "axios";

import { ApolloError } from "apollo-server-express";

import { promiseArgs } from "./promisesDef";

export const promisesResolve = {
  Query: {
    // Promises or arrays of promises can be given directly to the GraphQL engine.
    // graphql will await the promise for before returning
    promise: (_root: any, args: promiseArgs) => getPromise(args.milliseconds),

    // Of course you can await the promise in the resolver
    getCatFacts: () => makeHttpCall(),
  },
};

// This will return a promise that will resolve in the number milliseconds given
function getPromise(timeout: number) {
  const prom: Promise<string> = new Promise((res) => {
    setTimeout(() => {
      res(
        `Resolved after ${timeout / 1000} ${
          timeout === 1000 ? "second" : "seconds"
        }`
      );
    }, timeout);
  });
  return prom;
}

async function makeHttpCall() {
  try {
    const req = await axios.get<{ text: string }[]>(
      "https://cat-fact.herokuapp.com/facts"
    );
    return req.data.map((cat) => cat.text);
  } catch {
    throw new ApolloError("Could not connect to API");
  }
}
