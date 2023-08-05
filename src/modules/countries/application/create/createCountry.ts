import { CountryRepository } from "../../domain/CountryRepository";
import { Country, Prisma } from "@prisma/client";

export function createCountry(countryRepository: CountryRepository): (newCountry: Prisma.CountryCreateInput) => Promise<Country> {
    return async (newCountry: Prisma.CountryCreateInput): Promise<Country> => {
        const createdCountry = await countryRepository.create(newCountry)
        return createdCountry
    }
} 