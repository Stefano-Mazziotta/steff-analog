import { PrismaClient, Quality } from "@prisma/client"

export default class LinkRepository {

    public async create(prisma:PrismaClient, photoId: number, fileName: string): Promise<void> {
        const qualities: Quality[] = await prisma.quality.findMany()
        qualities.forEach(async quality => {
            const { id, name } = quality

            await prisma.src.create({
                data: {
                    url: `galery/${name}/${fileName}-${name}`,
                    photoId: photoId,
                    qualityId: id
                }
            })

        })
    }
}