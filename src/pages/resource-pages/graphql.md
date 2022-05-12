---
title: 'GraphQL Resources'
path: '/graphql'
keyQuote: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.'
---

GraphQL is the response to growing REST endpoints which often don't match up to the data that the client needs. They may return too much data (over-fetching) which results in excessive payload size. They may also return too little data (under-fetching) which results in making subsequent API calls to fetch remaining data. GraphQL solves this problem by creating a system where clients request the data that they need and receive nothing beyond that. This allows for more performant applications through reduced payload sizes and API calls. These benefits are compounded when considering higher network latencies on mobile devices and generally reduced computing power for non-flagship products.

## Tutorials/resources
- [Graphql.org](https://graphql.org/): Read about the specification and find additional resources on the official homepage for GraphQL
- [Best Practices](https://graphql.org/learn/best-practices/): An excellent source for some good general practices when working with GraphQL
- [Learning GraphQL Book](http://shop.oreilly.com/product/0636920137269.do): Eve Porcello and Alex Banks do an excellent job of breaking down what makes up a GraphQL API as well as how to create an application involving oAuth, uploading files, and more. Rich with code examples and best practices.
- [The Road to GraphQL Book](https://www.robinwieruch.de/the-road-to-graphql-book/): A free book by Robin Wieruch which dives into the pros and cons of GraphQL as well as how to get started with Apollo on both the client and the server.
- [Apollo's Tutorial](https://www.apollographql.com/docs/tutorial/introduction.html): Apollo’s tutorial walks through how to create a full stack application in GraphQL including wrapping an existing REST API with GraphQL
- [GraphQL Stack](https://www.graphqlstack.com/): A great resource that aggregates GraphQL tools by language
- [Pinboard](https://pinboard.in/u:dslemay/t:graphql): I aggregate interesting links related to GraphQL here
- [GraphQL Weekly](https://graphqlweekly.com/): A weekly newsletter about GraphQL

## Media
- [Build Better and More Discoverable APIs with GraphQL - Skyler Lemay](https://www.youtube.com/watch?v=A5GvnU1JxdQ&t=3s): Discover the problems GraphQL solves compared to REST, the impact of network latency, as well as an introduction to Schema, Resolvers, and Queries. A good introduction into Why GraphQL.
- [Everything you Need to Know about GraphQL in 3 Components - Eve Porcello](https://www.youtube.com/watch?v=F_M8v6MK0Sc): An excellent walkthrough of using GraphQL Queries, Mutations, and Subscriptions complete with an amazing live demo
- [JS Party - REST easy, GraphQL is here](https://changelog.com/jsparty/38): Hear from a John Resig and how Khan Academy has been using GraphQL
- [Testing GraphQL - Jake Dawkins](https://youtu.be/loA3FwbVt90): Jake gives an excellent introduction to various levels of testing GraphQL clients and servers
- [GraphQL Schema Design @ Scale - Marc André Giroux](https://www.youtube.com/watch?v=pJamhW2xPYw): Marc shares his perspectives on how to best maintain a Schema as it scales, after seeing both good and poor implementations
- [Hard Learned GraphQL Lessons: Based on a True Story (Natalie Qabazard & Aditi Garg)](https://www.youtube.com/watch?v=eUrtRzqN0h0): Aditi and Natalie share pragamatic tips and best practices from their work with GraphQL at Trulia

## Case studies

More companies are embracing GraphQL in production and to drive their applications. Check out some of the case studies below for more information on why they made these decisions and some of the impacts they observed.

- [Trulia](https://www.trulia.com/blog/tech/graphql-one-endpoint-to-rule-them-all/)
- [Major League Soccer](https://labs.mlssoccer.com/implementing-graphql-at-major-league-soccer-ff0a002b20ca)
- [Other Case Studies](https://www.graphql.com/case-studies/)

## Public GraphQL APIs

The biggest challenge can often be where to start actually interfacing with an API. Below are a handful of publically accessible GraphQL APIs that you can connect to and experiment querying data and building out a project

- [Github](https://developer.github.com/v4/): Retrieve information about Github users and their repositories. For more information on why Github chose to build the API with GraphQL over REST, check out their [announcement post](https://githubengineering.com/the-github-graphql-api/)
- [Yelp](https://www.yelp.com/developers/graphql/guides/intro): This highlights the benefits of GraphQL's declarative data structure. Retrieve only the data that you need for certain businesses and queries for reduced payload sizes.
- [Star Wars API](https://graphql.org/swapi-graphql/): This API can be a great introduction not only into GraphQL but having nested queries which would normally result in multiple round trips if the client was using REST.
- [Other Public GraphQL APIs:](https://github.com/APIs-guru/graphql-apis) This repo collects other publicly accessible GraphQL APIs
- [Gatsby](https://www.gatsbyjs.org/): While not a GraphQL API, Gatsby uses GraphQL for its data layer and has a large selection of plugins to connect to various data sources and create GraphQL queries for you. It is a great site building tool with performance as a top priority.
