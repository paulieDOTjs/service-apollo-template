import { merge } from "lodash";
import { GraphQLResolverMap } from "apollo-graphql";

import { helloResolve } from "./hello/helloResolve";
import { promisesResolve } from "./promises/promisesResolve";

// import all new resolvers made and merge them.
// the best solution I have found so far is the lodash merge function.
export const resolvers = (merge(
  helloResolve,
  promisesResolve
) as unknown) as GraphQLResolverMap;
