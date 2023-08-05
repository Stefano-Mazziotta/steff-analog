
import { Country, Prisma, PrismaClient } from '@prisma/client';
import { CountryRepository } from '../domain/CountryRepository';

export function createApiCountryRepository(): CountryRepository {
    const cache = new Map<number, Country>()
    const prisma = new PrismaClient()

    async function create(newCountry: Prisma.CountryCreateInput, ): Promise<Country> {
        const createdCountry = await prisma.country.create({
            data: newCountry
        })

        return createdCountry
    }

    async function createMany(newCountries: Prisma.CountryCreateManyInput[] ): Promise<Prisma.BatchPayload> {
        const createdCountries = await prisma.country.createMany({
            data: newCountries
        })

        return createdCountries
    }

    async function findByName(name: string): Promise<Country | null>{
        const foundCountry = await prisma.country.findFirst({
            where: {name: name} 
        })
        return foundCountry

    }

    return {
        create,
        createMany,
        findByName,
    };
}