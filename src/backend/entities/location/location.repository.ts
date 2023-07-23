import { PrismaClient, Prisma, Location } from "@prisma/client"

export default class LocationRepository {

    public async create(prisma: PrismaClient, newLocation: Prisma.LocationCreateInput): Promise<Location> {
        const { name, city } = newLocation
        const location = await prisma.location.create({
            data: {
                name,
                city
            },
        })
    
        return location
    }

    public async createMany(prisma: PrismaClient, newLocations: Prisma.LocationCreateManyInput[]): Promise<Prisma.BatchPayload> {
        const batchPayload = await prisma.location.createMany({
            data: newLocations
        })
    
        return batchPayload
    }
}