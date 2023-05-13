import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";

import { photos } from "@/constant/photos";

interface GetPhotoByIdArgs {
  id: number
}

type Photo = {
  firstName: String
}

const typeDefs = `#graphql

  type Country {
    id: ID!
    name: String!
  }

  type Film {
    id: ID!
    name: String!
    createdYear: Int!
    madeIn: Country
  }

  type Camera {
    id: ID!
    name: String!
    createdYear: Int!
    madeIn: Country
  }

  type City {
    id: ID!
    name: String!
    country: Country!
  }

  type Location {
    id: ID!
    name: String!
    city: City!
  }

  type Category {
    id: ID!
    name: String!
  }

  type Quality {
    id: ID!,
    name: String!
  }

  type Src {
    id: ID!,
    url: String!,
    quality: Quality!
    # photo: Photo
  }

  type Photo {
    id: ID!
    height: Int!
    width: Int!
    description: String!
    shootDate: String!
    film: Film!
    camera: Camera!
    location: Location!
    category: Category!
    src: [Src!]!
    createdTimestamp: Int!
  }

  type Query { 
    getPhotos: [Photo!]!
    getPhotoById(id: ID!): Photo
  }
`;
//https://community.apollographql.com/t/typescript-types-for-resolvers/5272/2
const resolvers = {

  Query: {
    getPhotos: () => photos,
    getPhotoById: (parent: Photo, args: GetPhotoByIdArgs, /*contextValue, info*/) => photos.find(photo => photo.id == args.id)
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
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

