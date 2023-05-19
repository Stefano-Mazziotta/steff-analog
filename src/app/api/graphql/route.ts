import { NextRequest, NextResponse } from 'next/server';
import { ApolloServer } from '@apollo/server';
import Cors, { CorsOptions } from 'cors';

import { resolvers } from '@/graphql/resolvers';
import { typeDefs } from '@/graphql/schema';

import { makeExecutableSchema } from '@graphql-tools/schema';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

const whitelist = ['http://localhost:3000', 'https://steff-analog.vercel.app/'];

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {

    if (origin === undefined) {
      callback(null, false);
      return;
    }

    const isAllowedOrigin = whitelist.indexOf(origin) !== -1;

    if (!isAllowedOrigin) {
      callback(new Error('Not allowed by CORS'));
      return;
    }

    callback(null, true);
  },
  methods: ['POST', 'GET', 'HEAD'],
};

const cors = Cors(corsOptions);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  introspection: process.env.NODE_ENV !== 'production'
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

function runMiddleware(req: NextRequest, res: NextResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        reject(result);
      }

      resolve(result);
    });
  });
}

export async function GET(request: NextRequest, res:NextResponse) {
  await runMiddleware(request, res, cors);
  return handler(request);
}

export async function POST(request: NextRequest, response: NextResponse) {
  await runMiddleware(request, response, cors);
  return handler(request);
}