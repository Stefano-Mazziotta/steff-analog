
import { City, Prisma, PrismaClient } from '@prisma/client';
import { CityRepository } from '../domain/CityRepository';

export function createApiCityRepository(): CityRepository {
    const cache = new Map<number, City>()
    const prisma = new PrismaClient()

    async function create(newCity: Prisma.CityCreateInput, ): Promise<City> {
        const createdCity = await prisma.city.create({
            data: newCity
        })

        return createdCity
    }

    async function createMany(newCities: Prisma.CityCreateManyInput[] ): Promise<Prisma.BatchPayload> {
        const createdCities = await prisma.city.createMany({
            data: newCities
        })

        return createdCities
    }

    async function getByName(cityName: string): Promise<City | null>{
        const foundCity = await prisma.city.findFirst({
            where: {name: cityName} 
        })
        return foundCity

    }

    return {
        create,
        createMany,
        getByName
    };
}