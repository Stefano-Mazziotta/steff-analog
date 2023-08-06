import { CityRepository } from "../../domain/CityRepository";
import { City } from "@prisma/client";

export function findCityByName(_cityRepository: CityRepository): (name: string) => Promise<City | null> {
    return async (name: string): Promise<City | null> => {
        const foundCity:City | null = await _cityRepository.findByName(name)
        return foundCity
    }
} 