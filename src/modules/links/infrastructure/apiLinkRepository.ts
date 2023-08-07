
import { Link, Prisma, PrismaClient } from '@prisma/client';
import { LinkRepository } from '../domain/LinkRepository';

export function createApiLinkRepository(): LinkRepository {
    const cache = new Map<number, Link>()
    const prisma = new PrismaClient()

    async function create(newLink: Prisma.LinkCreateInput, ): Promise<Link> {
        const createdLink = await prisma.link.create({
            data: newLink
        })

        return createdLink
    }

    // public async create(prisma:PrismaClient, photoId: number, fileName: string): Promise<void> {
    //     const qualities: Quality[] = await prisma.quality.findMany()
    //     qualities.forEach(async quality => {
    //         const { id, name } = quality

    //         await prisma.src.create({
    //             data: {
    //                 url: `galery/${name}/${fileName}-${name}`,
    //                 photoId: photoId,
    //                 qualityId: id
    //             }
    //         })

    //     })
    // }

    async function createMany(newLinks: Prisma.LinkCreateManyInput[] ): Promise<Prisma.BatchPayload> {
        const createdLinks = await prisma.link.createMany({
            data: newLinks
        })

        return createdLinks
    }

    return {
        create,
        createMany
    }
}