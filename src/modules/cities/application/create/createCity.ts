import { CityRepository } from "../../domain/CityRepository";
import { City, Prisma } from "@prisma/client";

export function createCity(_cityRepository: CityRepository): (newCity: Prisma.CityCreateInput) => Promise<City> {
    return async (newCity: Prisma.CityCreateInput): Promise<City> => {
        const createdCity = await _cityRepository.create(newCity)
        return createdCity
    }
} 