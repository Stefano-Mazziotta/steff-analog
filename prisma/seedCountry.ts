import { Prisma, PrismaClient } from "@prisma/client";
import { CountryRepository } from "@/modules/countries/domain/CountryRepository";

export async function seedCountry(_countryRepository: CountryRepository): Promise<void> {

    const newCountries: Prisma.CountryCreateManyInput[] = [
        { name: "Argentina" },
        { name: "Italy" },
        { name: "Japan" },
    ]

    await _countryRepository.createMany(newCountries);
}