import { CityRepository } from "../../domain/CityRepository";
import { Prisma } from "@prisma/client";

export function createManyCities(_cityRepository: CityRepository): (newCities: Prisma.CityCreateManyInput[]) => Promise<Prisma.BatchPayload> {
    return async (newCities: Prisma.CityCreateManyInput[]): Promise<Prisma.BatchPayload> => {
        const createdCities = await _cityRepository.createMany(newCities)
        return createdCities
    }
} 