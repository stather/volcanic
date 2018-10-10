const { ApolloServer, gql, ApolloError } = require('apollo-server');
const CosmosClient = require('@azure/cosmos').CosmosClient;
const config = require('./cosmos/config');
const url = require('url');

const endpoint = config.endpoint;
const masterKey = config.primaryKey;
const HttpStatusCodes = { NOTFOUND: 404 };

const databaseId = config.database.id;
const containerId = config.container.id;
const conPol = {};
conPol.DisableSSLVerification = true;
const client = new CosmosClient({ endpoint: endpoint, auth: { masterKey: masterKey }, connectionPolicy: conPol });

async function createDatabase() {
  const { database } = await client.databases.createIfNotExists({ id: databaseId });
  console.log(`Created database:\n${database.id}\n`);
}

async function readDatabase() {
  const { body: databaseDefinition } = await client.database(databaseId).read();
  console.log(`Reading database:\n${databaseDefinition.id}\n`);
}

async function queryContainer() {
  console.log(`Querying container:\n${config.container.id}`);

  // query to return all children in a family
  const querySpec = {
    query: "SELECT c.id, c.data FROM c where contains(c.data, 'some')",
    parameters: [
      {
        name: "@lastName",
        value: "Andersen"
      }
    ]
  };

  const { result: results } = await client.database(databaseId).container(containerId).items.query(querySpec).toArray();
  return results;
};

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const customers = [
  {
    firstName: 'Russell',
    surname: 'Stather'
  }
];

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Book" type can be used in other type declarations.
  type Book {
    title: String
    author: String
  }

  type Customer {
    firstName: String
    surname: String
    title: String
    books: [Book]
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    books: [Book]
    customers: [Customer]
  }


`;

async function getData() {

  try {
    var r = await queryContainer();
    var c = 4;
  } catch (error) {
    var b = 3;
    throw new ApolloError("something went wrong", "12345");
  }


  return books;
}

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    books: () => {
      return getData();
    },
    customers: () => customers,
    Mutation: {
      addTodo: (source, args, context, info) => {
        var a = 27;
        return todo;
      },
    }
  },
};

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: "service:cosmos:toLoHjRE0xVKC_eoO7xW9A"
  }
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
