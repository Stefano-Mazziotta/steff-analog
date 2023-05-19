import { NextRequest, NextResponse } from 'next/server';
import { ApolloServer } from '@apollo/server';
import Cors, { CorsOptions } from 'cors';

import { resolvers } from '@/graphql/resolvers';
import { typeDefs } from '@/graphql/schema';

import { makeExecutableSchema } from '@graphql-tools/schema';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

const whitelist = ['http://localhost:3000', 'https://studio.apollographql.com'];

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

const schema = makeExecutableSchema({ typeDefs, resolvers });
const server = new ApolloServer({ schema });

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

export async function GET(req: NextRequest, res:NextResponse) {
  await runMiddleware(req, res, cors);
  return handler(req);
}

export async function POST(req: NextRequest, res: NextResponse) {
  await runMiddleware(req, res, cors);
  return handler(req);
}