import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";
import { NextApiResponse, NextApiRequest } from "next";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextApiRequest>(server, {
  context: async (request, response) => ({ request, response }),
});

export default async function handlerWrapper(request: NextApiRequest, response: NextApiResponse) {
  response.setHeader("Access-Control-Allow-Origin", "https://studio.apollographql.com");
  response.setHeader("Access-Control-Allow-Credentials", "true");
  return handler(request, response);
}

