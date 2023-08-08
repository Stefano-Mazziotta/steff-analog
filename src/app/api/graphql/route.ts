import { NextRequest, NextResponse } from 'next/server';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';

import { makeExecutableSchema } from '@graphql-tools/schema';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import { cors } from '@/lib/cors';
import { runMiddleware } from '@/lib/middleware';
import { formatError } from '@/lib/apolloServer';

import { resolvers } from '@/graphql/resolvers';
import { typeDefs } from '@/graphql/schema';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const isProduction = process.env.NODE_ENV === 'production';
const server = new ApolloServer({
  schema,
  introspection: !isProduction,
  plugins: isProduction ? [ApolloServerPluginLandingPageDisabled()] : [],
  formatError
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export async function GET(request: NextRequest, response:NextResponse) {
  await runMiddleware(request, response, cors);
  return handler(request);
}

export async function POST(request: NextRequest, response: NextResponse) {
  await runMiddleware(request, response, cors);
  return handler(request);
}