import { NextRequest, NextResponse } from 'next/server';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';

import { makeExecutableSchema } from '@graphql-tools/schema';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import { cors } from '@/backend/lib/cors';
import { runMiddleware } from '@/backend/lib/middleware';
import { formatError } from '@/backend/lib/apolloServer';

import { resolvers } from '@/backend/graphql/resolvers';
import { typeDefs } from '@/shared/graphql/schema';

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