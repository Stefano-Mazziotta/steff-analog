import { Prisma } from "@prisma/client";
import { CountryRepository } from "@/modules/countries/domain/CountryRepository";
import { createManyCountries } from "@/modules/countries/application/create/createManyCountries";

export default async function seedCountry(_countryRepository: CountryRepository): Promise<void> {

    const newCountries: Prisma.CountryCreateManyInput[] = [
        { name: "Argentina" },
        { name: "Italy" },
        { name: "Japan" },
    ]

    await createManyCountries(_countryRepository)(newCountries);
}