import { resolvers } from '@/graphql/resolvers'
import { typeDefs } from '@/graphql/schema'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { NextRequest } from 'next/server'

export const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({
  schema,
})

const handler = startServerAndCreateNextHandler<NextRequest>(server, { context: async req => ({ req }) });

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}