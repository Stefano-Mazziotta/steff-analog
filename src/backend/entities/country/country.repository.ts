import { PrismaClient, Prisma, Country } from "@prisma/client"

export default class CountryRepository {

    public async create(prisma:PrismaClient, newCountry: Prisma.CountryCreateInput): Promise<Country>{
        const createdCountry = await prisma.country.create({
            data: newCountry,
          })
        
        return createdCountry
    }

    public async createMany(prisma: PrismaClient, newCountries: Prisma.CountryCreateManyInput[]): Promise<Prisma.BatchPayload> {
        const prismaResponse = await prisma.country.createMany({
            data: newCountries
        })
    
        return prismaResponse
    }
}