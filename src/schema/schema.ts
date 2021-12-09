import { buildSubgraphSchema } from "@apollo/subgraph";
import { helloDef } from "./hello/helloDef";
import { helloResolve } from "./hello/helloResolve";
import { promisesDef } from "./promises/promisesDef";
import { promisesResolve } from "./promises/promisesResolve";

export const schema = buildSubgraphSchema([
  { typeDefs: promisesDef, resolvers: promisesResolve },
  { typeDefs: helloDef, resolvers: helloResolve as any },
]);
