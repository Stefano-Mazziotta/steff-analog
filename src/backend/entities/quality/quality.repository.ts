import { PrismaClient, Prisma, Quality } from "@prisma/client"

export default class QualityRepository {

    public async createMany(prisma: PrismaClient, newQualities: Prisma.QualityCreateManyInput[]): Promise<Prisma.BatchPayload> {
        const batchPayload = await prisma.quality.createMany({
            data: newQualities
        })

        return batchPayload
    }
}