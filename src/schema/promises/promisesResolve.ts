import { promiseArgs } from "./promisesDef";

export const promisesResolve = {
  Query: {
    promise: (_root: any, args: promiseArgs) => getPromise(args.milliseconds),
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
