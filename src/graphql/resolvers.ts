import { IResolvers } from "@graphql-tools/utils";
import { photos } from "@/constant/photos";

interface GetPhotoByIdArgs {
    id: number
}

// https://community.apollographql.com/t/typescript-types-for-resolvers/5272/2
export const resolvers: IResolvers = {

  Query: {
    getPhotos: () => photos,
    getPhotoById: (parent, args: GetPhotoByIdArgs, contextValue, info) => photos.find(photo => photo.id == args.id)
  },
  Mutation: {
    addPhoto: (root, args) => {
      return `El titulo de la nueva foto es: '${args.input.title}'`
    }
  }
};