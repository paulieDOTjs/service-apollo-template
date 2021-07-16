# service-apollo-template

## usage

This is a template to build a GraphQL service that can be added to an Apollo Federation Gateway like the one created by the anh-domain-api team (found here: https://git.cglcloud.com/anh-domain-api/cda).

## make it your own

First search the application for TEAM_NAME_GOES_HERE and replace it with your team name and APP_NAME_GOES_HERE and replace it with your application name.

For the most part all development work will then take place inside the /src/api/schema folder. Here you will define the GraphQL types and the corresponding resolvers to persist that data.

While in development you will want to use the command "yarn dev." This will watch for changes in your .ts files and restart the server when a change is saved.

## hello world

This has been setup a very simple schema and resolver pairing. There is one scalar field of type string called "hello" on the query type which returns "hello world" and a Language type which returns "hello world" in different languages with the option for arguments to specify a name which can be accessed through the aroundTheWorld field on the Query Type. This is a demonstration of how to set up types and resolvers.

## a picture is worth a thousand words

This implementation is set up already with a visualizer of the graph. By navigating to [url of app]/public/visualizer.html the graph will be introspected on page load and generate a graph of the current state of the graph.

## the graph family

If you would like to combine your graph with the apollo federation gateway created by the anh-domain-api team (found here: https://connecteddataapi.dev.cglcloud.in/) set up a meeting with us and we can discuss how your graph fits in. You can send us an email at DOMAIN-API-ALL@exch.cargill.com.
