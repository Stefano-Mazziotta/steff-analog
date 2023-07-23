import { PrismaClient, Prisma, Photo } from "@prisma/client"

export default class PhotoRepository {

    public async create(prisma: PrismaClient, newPhoto: Prisma.PhotoCreateInput): Promise<Photo> {
        const createdPhoto = await prisma.photo.create({
            data: newPhoto
        })

        return createdPhoto
    }
}