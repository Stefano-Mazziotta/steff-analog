import { CountryRepository } from "../../domain/CountryRepository";
import { Country } from "@prisma/client";

export function getCountryByName(_countryRepository: CountryRepository): (countryName: string) => Promise<Country | null> {
    return async (countryName: string): Promise<Country | null> => {
        const foundCountry:Country | null = await _countryRepository.getByName(countryName)
        return foundCountry
    }
} 