import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";

const resolvers = {
  Query: {
    hello: () => 'world',
  }
};

const typeDefs = `#graphql
  type Query { 
    hello: String
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({ req, res }),
});

export async function GET(request: NextRequest){
  return handler(request)
}

export async function POST(request: NextRequest) {
  return handler(request);
}

