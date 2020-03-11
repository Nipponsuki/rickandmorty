import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { HttpLink } from 'apollo-link-http';

const GRAPHQL_URL = 'https://rickandmortyapi.com/graphql';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: GRAPHQL_URL
  })
});

export default withApollo(() => client);
