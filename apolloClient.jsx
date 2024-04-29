// apolloClient.jsx
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://192.168.1.200:8080/graphql', // Update the URI to point to your server
    cache: new InMemoryCache(),
});

export default client;