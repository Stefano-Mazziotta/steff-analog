import { CountryRepository } from "../../domain/CountryRepository";
import { Prisma } from "@prisma/client";

export function createManyCountries(countryRepository: CountryRepository): (newCountries: Prisma.CountryCreateManyInput[]) => Promise<Prisma.BatchPayload> {
    return async (newCountries: Prisma.CountryCreateManyInput[]): Promise<Prisma.BatchPayload> => {
        const createdCountries = await countryRepository.createMany(newCountries)
        return createdCountries
    }
} 