import { PhotoRepository } from "../../domain/PhotoRepository"; 
import { Photo, Prisma } from "@prisma/client";

export function createPhoto(_photoRepository: PhotoRepository): (newPhoto: Prisma.PhotoCreateInput) => Promise<Photo> {
    return async (newPhoto: Prisma.PhotoCreateInput): Promise<Photo> => {
        const createdPhoto = await _photoRepository.create(newPhoto);
        return createdPhoto;
    }
}