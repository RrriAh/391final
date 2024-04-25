const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
let inputs = [];
let nextInputId = 1;

const typeDefs = gql`
    type Input {
        id: ID!
        title: String!,
        content: String!
    }

    type Mutation {
        addInput(title:String!, content: String!): Input
    }

    type Query {
        inputs: [Input]
    }
`;


const resolvers = {
    Mutation: {
        addInput: (_, { title,content }) => {
            const newInput = {
                id: String(nextInputId++),
                title: title,
                content: content
            };
            inputs.push(newInput);
            return newInput;
        }
    },
    Query: {
        inputs: () => inputs
    }
};

const server = new ApolloServer({ typeDefs, resolvers });


async function startServer() {
    await server.start();
    const app = express();
    app.use(cors());
    server.applyMiddleware({ app, path: '/graphql' });

    app.listen(8080, () => {
        console.log('Server is running on port 8080');
    });
}

startServer()
    .then(() => console.log('Apollo Server started'))
    .catch((error) => console.error('Error starting server:', error));