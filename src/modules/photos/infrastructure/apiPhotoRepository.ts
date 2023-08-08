
import { Photo, Prisma, PrismaClient } from '@prisma/client';
import { PhotoRepository } from '../domain/PhotoRepository';

export function createApiPhotoRepository(): PhotoRepository {
    const cache = new Map<number, Photo>()
    const prisma = new PrismaClient()

    async function create(newPhoto: Prisma.PhotoCreateInput, ): Promise<Photo> {
        const createdPhoto = await prisma.photo.create({
            data: newPhoto
        })

        return createdPhoto
    }

    async function createMany(newPhotos: Prisma.PhotoCreateManyInput[] ): Promise<Prisma.BatchPayload> {
        const createdPhotos = await prisma.photo.createMany({
            data: newPhotos
        })

        return createdPhotos
    }

    return {
        create,
        createMany
    }
}