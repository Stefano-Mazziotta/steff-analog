import { PrismaClient, Prisma, City } from "@prisma/client"

export default class CityRepository {

    public async create(prisma:PrismaClient, newCity: Prisma.CityCreateInput): Promise<City>{
        const { name, country } = newCity;

        const createdCity = await prisma.city.create({
            data: {
                name,
                country
            }
        })

        return createdCity
    }

    public async createMany(prisma: PrismaClient, newCities: Prisma.CityCreateManyInput[]): Promise<Prisma.BatchPayload> {
        const prismaResponse = await prisma.city.createMany({
            data: newCities,
        })
    
        return prismaResponse
    }
}