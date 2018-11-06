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

async function addContact(contact){

  const { result: results } = await client.database(databaseId).container(containerId).items.create(contact);
  return results;

}

async function queryContainer(fname) {
  console.log(`Querying container:\n${config.container.id}`);

  // query to return all children in a family
  const querySpec = {
    query: "SELECT c.contact, c.id FROM c where startswith(upper(c.contact.firstName), upper(@firstName))",
    parameters: [
      {
        name: "@firstName",
        value: fname
      }
    ]
  };

  const { result: results } = await client.database(databaseId).container(containerId).items.query(querySpec).toArray();
  return results;
};

async function findContactById(id) {
  console.log(`Querying container:\n${config.container.id}`);

  // query to return all children in a family
  const querySpec = {
    query: "SELECT c.contact, c.id FROM c where c.id = @id",
    parameters: [
      {
        name: "@id",
        value: id
      }
    ]
  };

  const { result: results } = await client.database(databaseId).container(containerId).items.query(querySpec).toArray();
  return results[0];
};


// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    contacts(firstName: String): [Contact]
    contact(id: String): Contact
  }


  type Mutation {
    addContact(contact: ContactInput) : Contact
    }

   input ContactInput {
       firstName: String!
       lastName: String!
       email: String!
       cell: String
     }

     type cd {
      firstName: String!
      lastName: String!
      email: String!
      cell: String
   }

     type Contact {
       id: String
       contact: cd 
         }



`;


// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
const resolvers = {
  Query: {
    contacts: (root, args, context, info) => {
        return queryContainer(args.firstName);
    },
    contact:(root, args, context, info) => {
      return findContactById(args.id);
    }
  },
  Mutation: {
    addTodo: (source, args, context, info) => {
      var a = 27;
      return todo;
    },
  },
  Mutation: {
    addContact: (source, args, context, info) => {
      var a = 27;
      addContact(args);
      return todo;    
    }
  }
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
