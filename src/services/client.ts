import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clcckqn423yp601uo3xcd1rh7/master',
  cache: new InMemoryCache(),
});