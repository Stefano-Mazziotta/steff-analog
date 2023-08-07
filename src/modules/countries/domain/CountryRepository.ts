import { Country, Prisma } from "@prisma/client";

export interface CountryRepository {
	create: (newCountry: Prisma.CountryCreateInput) => Promise<Country>
    createMany: (newCountries: Prisma.CountryCreateManyInput[]) => Promise<Prisma.BatchPayload>
    getByName: (name: string) => Promise<Country | null>
}