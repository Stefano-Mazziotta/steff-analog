import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let apolloClient: ApolloClient<any> | null = null;

export const getApolloClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!apolloClient || typeof window === "undefined") {
    apolloClient = new ApolloClient({
      link: new HttpLink({
        uri: `http://${process.env.NEXT_PUBLIC_BASE_URL}/graphql` // 
      }),
      cache: new InMemoryCache(),
      headers: {
        'access-control-allow-origin': 'https://studio.apollographql.com',
        'access-control-allow-credentials': 'true'
      }
    });
  }

  return apolloClient;
}