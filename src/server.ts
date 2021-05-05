/* eslint-disable no-console */
import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
import path from "path";

import { apollo } from "./api/apollo";

dotenv.config();

const app = express();
const port = process.env.PORT || "4000";

//set port
app.set("port", port);
//use a logger in dev environment
app.use(logger("dev"));
//send json when requested.
app.use(express.json());

// when going to /public serve the public folder
// this will serve up the cargill favicon and the visualizer
app.use("/public", express.static(path.join(__dirname, "../public")));

//This is just for health checker
app.get("/health", (_req, res) => {
  res.send("Ok");
});

//redirect all root get requests to /graphql
app.get("/", (_req, res) => {
  res.redirect(301, "/graphql");
});

//redirect all root post requests to /graphql
app.post("/", (_req, res) => {
  res.redirect(308, "/graphql");
});

// this is used to demo how graphQL can resolve HTTP requests
app.get("/http", (_req, res) => {
  res.send({ data: "I was sent over http!" });
});

//add apollo graphql server as middleware to express server
apollo.applyMiddleware({ app });

//start server
app.listen({ port }, () => {
  console.log(
    "🌟 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌟 "
  );
  console.log("🌟".padEnd(81, " ") + "🌟");
  console.log(
    `🌟      Now browse to http://localhost:${port}${apollo.graphqlPath} for GraphQL Playground`.padEnd(
      81,
      " "
    ) + "🌟"
  );
  console.log(
    `🌟       or http://localhost:${port}/public/visualizer.html for visualizer`.padEnd(
      81,
      " "
    ) + "🌟"
  );
  console.log("🌟".padEnd(81, " ") + "🌟");
  console.log(
    "🌟 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌟 "
  );
});
