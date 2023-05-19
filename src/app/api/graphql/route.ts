import { NextRequest, NextResponse } from 'next/server';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
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

const isProduction = process.env.NODE_ENV === 'production';
const server = new ApolloServer({
  schema,
  introspection: !isProduction,
  plugins: isProduction ? [ApolloServerPluginLandingPageDisabled()] : [],
  formatError: (formatedError, error) => {
    // Check if the error object contains any extensions
    if (formatedError.extensions && formatedError.extensions.code === "BAD_REQUEST") {
      // Customize the error message for the specific code
      const errorMessage = "Bad request. Please check your input.";
      return {
        message: errorMessage
      };
    }
    
    // Default error message
    const errorMessage = "An error occurred. Please try again later.";
    return {
      message: errorMessage
    };
  },
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