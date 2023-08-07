import { CityRepository } from "../../domain/CityRepository";
import { City } from "@prisma/client";

export function getCityByName(_cityRepository: CityRepository): (cityName: string) => Promise<City | null> {
    return async (cityName: string): Promise<City | null> => {
        const foundCity:City | null = await _cityRepository.getByName(cityName)
        return foundCity
    }
} 