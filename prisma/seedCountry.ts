import { Prisma, PrismaClient } from "@prisma/client";
import CountryRepository from "@/backend/entities/country/country.repository";

export default async function seedCountry(prisma: PrismaClient): Promise<void> {
    const _countryRepository = new CountryRepository()

    const newCountries: Prisma.CountryCreateManyInput[] = [
        { name: "Argentina" },
        { name: "Italy" },
        { name: "Japan" },
    ]

    await _countryRepository.createMany(prisma, newCountries);
}