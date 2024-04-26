// apolloClient.jsx
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://10.239.227.140:8080/graphql', // Update the URI to point to your server
    cache: new InMemoryCache(),
});

export default client;