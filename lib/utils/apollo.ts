import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: 'https://wikidevs.ep-tech.fr/graphql',
    cache: new InMemoryCache()
});

export default apolloClient;
