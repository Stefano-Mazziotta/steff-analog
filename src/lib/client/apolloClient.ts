import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let apolloClient: ApolloClient<any> | null = null;

export const getApolloClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.
  if (!apolloClient || typeof window === "undefined") {
    apolloClient = new ApolloClient({
      link: new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`
      }),
      cache: new InMemoryCache()
    });
  }

  return apolloClient;
}