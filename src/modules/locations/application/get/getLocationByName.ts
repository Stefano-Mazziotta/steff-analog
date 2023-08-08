import { LocationRepository } from "../../domain/LocationRepository";
import { Location } from "@prisma/client";

export function getLocationByName(_locationRepository: LocationRepository): (locationName: string) => Promise<Location | null> {
    return async (locationName: string): Promise<Location | null> => {
        const foundLocation:Location | null = await _locationRepository.getByName(locationName)
        return foundLocation
    }
} 