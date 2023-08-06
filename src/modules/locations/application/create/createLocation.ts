import { LocationRepository } from "../../domain/LocationRepository"; 
import { Location, Prisma } from "@prisma/client";

export function createLocation(_locationRepository: LocationRepository): (newLocation: Prisma.LocationCreateInput) => Promise<Location> {
    return async (newLocation: Prisma.LocationCreateInput): Promise<Location> => {
        const createdLocation = await _locationRepository.create(newLocation);
        return createdLocation;
    }
}