import { Photo, Prisma } from "@prisma/client";

export interface PhotoRepository {
	create: (newPhoto: Prisma.PhotoCreateInput) => Promise<Photo>;
    createMany: (newPhotos: Prisma.PhotoCreateManyInput[]) => Promise<Prisma.BatchPayload>
    getAll: () => Promise<Photo[]> 
}