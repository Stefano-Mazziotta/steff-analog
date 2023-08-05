import { City, Prisma } from "@prisma/client";

export interface CityRepository {
	create: (newCity: Prisma.CityCreateInput) => Promise<City>
    createMany: (newCities: Prisma.CityCreateManyInput[]) => Promise<Prisma.BatchPayload>
}