import { PhotoRepository } from "../../domain/PhotoRepository"; 
import { Prisma } from "@prisma/client";

export function createManyPhotos(_photoRepository: PhotoRepository): (newPhotos: Prisma.PhotoCreateManyInput[]) => Promise<Prisma.BatchPayload> {
    return async (newPhotos: Prisma.PhotoCreateManyInput[]): Promise<Prisma.BatchPayload> => {
        const createdPhotos = await _photoRepository.createMany(newPhotos)
        return createdPhotos
    }
}