export const typeDefs = `#graphql

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
    type Mutation {
      addPhoto(input: AddPhotoInput!): String!
    }

    input AddPhotoInput {
      title: String!
      description: String!
    }
`;