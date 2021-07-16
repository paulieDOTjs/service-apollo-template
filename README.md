# Getting Started

### Installing Node, NPM, and Yarn and starting the server.

This is a **node.js** project. **Node v14 and NPM will be required.**

### Installing Node

To check to see if you have Node installed open a terminal and run:

```
node -v
```

If you get an error or the version number is less than 14 (don't worry the error doesn't hurt your computer it's just your computer saying I don't know what you mean) you will have to install it or update it. See more here: https://nodejs.org/en/

### Installing NPM

To check for NPM open a terminal and run:

```
npm -v
```

Again, if you get an error (don't worry the error doesn't hurt your computer it's just your computer saying I don't know what you mean) you will have to install it.

You can see how to download NPM here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Bonus installations: NVM and Homebrew

**If you plan on doing a lot of Node development** I would recommend **Node Version Manager (NVM).** And use NVM to install NPM. See more here: https://github.com/nvm-sh/nvm

**If you are on Mac or Linux** _and_ you want to do **a lot of Node development** you can install NVM using **Homebrew.** Read more here: https://brew.sh/ and here: https://formulae.brew.sh/formula/nvm#default.

### Installing Yarn

**I also chose to use Yarn, this is optional.** Yarn is basically the same as NPM but faster. To check to see if you have Node installed open a terminal and run:

```
yarn -v
```

Again, if you get an error (don't worry the error doesn't hurt your computer it's just your computer saying I don't know what you mean) you will have to install it. **Yarn requires Node and NPM make sure they are installed** _(see above)_. Once Node and NPM are installed you can install Yarn following the instructions here: https://classic.yarnpkg.com/en/docs/install/.

### Starting the server

**To start the project with Yarn** navigate your terminal to this directory and run:

```
yarn install
```

once that finishes installing (should take a few minutes) you should then run:

```
yarn dev
```

**If you are NOT using Yarn and want to use NPM** delete the yarn.lock file and go into the package.json file. In the _package.json_ file under _"scripts"_ find _"start"_ and change _yarn build && node dist/server.js_ to _npm run build && node dist/server.js_. Once that change is made navigate to this directory in your terminal and run:

```
npm install
```

once that finishes installing (should take a few minutes) you should then run:

```
npm run dev
```

**Yarn runs on NPM you cannot both at the same time.**


# Usage

First off, **what is GraphQL?** GraphQL as defined by GraphQL.org is _"a query language for your API"_. This doesn't clear things up in my opinion. Think of GraphQL as **an alternative to REST** with some added features. GraphQL, much like REST, is **not actually querying a database.** It is the vehicle with which a **Front-End application talks to a Back-End application.** Once that message finds its way to the **Back-End** it is up to the that application to **send a response back.** To get the information for that response is up to the developer. It might query a database. It might have information hard-coded in (that's how I mostly did it here for simplicity sake). It might call on a REST API and send _that_ information the client (which might seem backwards but the world might never be RESTless which is probably a good thing). It might do all of the above. **It is just another tool in the tech tool belt that can make things easier.** To find more information about GraphQL see here: https://GraphQL.org/.

This is a template to build an Apollo GraphQL Gateway. This gateway can be pointed at **any number of compatible GraphQL APIs** and they will be **combined together** into **one** _happy_ **graph.** To see which implementations of GraphQL are compatible see here: https://www.apollographql.com/docs/federation/other-servers/. These subgraphs can point from one domain to another **passing** around **necessary primary keys** and other information to **establish relationships.** Using this implementation, you will have the **benefits of a micro-service architecture** while still having **one central URL for all data exchange** that has **domain relations baked right in.** You can find information about Apollo Federation here: https://www.apolloGraphQL.com/docs/federation/.

## make it your own

I have preconfigured eslint, typescript, and prettier to behave how I like. These keep coding patterns consistent across the project and will throw errors if you make different stylistic choices. Feel free to use it. Feel free to modify it. Feel free to throw it away completely. Make it your own! Have fun with it! This is your project now.

For the most part all development work will then take place inside the /src/api/schema folder. Here you will define the GraphQL types and the corresponding resolvers to persist that data.

While in development you will want to use the command "yarn dev." This will watch for changes in your .ts files and restart the server when a change is saved.

## hello world

This has been setup a very simple schema and resolver pairing. There is one scalar field of type string called "hello" on the query type which returns "hello world" and a Language type which returns "hello world" in different languages with the option for arguments to specify a name which can be accessed through the aroundTheWorld field on the Query Type. This is a demonstration of how to set up types and resolvers.

## a picture is worth a thousand words

This implementation is set up already with a visualizer of the graph. By navigating to [url of app]/public/visualizer.html the graph will be introspected on page load and generate a graph of the current state of the graph.

