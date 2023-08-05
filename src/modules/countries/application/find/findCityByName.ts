import { CountryRepository } from "../../domain/CountryRepository";
import { Country, Prisma } from "@prisma/client";

export function findCountryByName(_countryRepository: CountryRepository): (name: string) => Promise<Country | null> {
    return async (name: string): Promise<Country | null> => {
        const foundCountry:Country | null = await _countryRepository.findByName(name)
        return foundCountry
    }
} 