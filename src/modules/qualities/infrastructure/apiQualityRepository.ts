
import { Quality, Prisma, PrismaClient } from '@prisma/client';
import { QualityRepository } from '../domain/QualityRepository';

export function createApiQualityRepository(): QualityRepository {
    const cache = new Map<number, Quality>()
    const prisma = new PrismaClient()

    async function create(newQuality: Prisma.QualityCreateInput, ): Promise<Quality> {
        const createdQuality = await prisma.quality.create({
            data: newQuality
        })

        return createdQuality
    }

    async function createMany(newQualities: Prisma.QualityCreateManyInput[] ): Promise<Prisma.BatchPayload> {
        const createdQualities = await prisma.quality.createMany({
            data: newQualities
        })

        return createdQualities
    }

    async function getAll(): Promise<Quality[]> {
        const qualities = await prisma.quality.findMany()

        return qualities
    }

    return {
        create,
        createMany,
        getAll
    }
}