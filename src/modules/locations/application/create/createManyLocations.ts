import { LocationRepository } from "../../domain/LocationRepository"; 
import { Location, Prisma } from "@prisma/client";

export function createManyLocations(_locationRepository: LocationRepository): (newLocations: Prisma.LocationCreateManyInput[]) => Promise<Prisma.BatchPayload> {
    return async (newLocations: Prisma.LocationCreateManyInput[]): Promise<Prisma.BatchPayload> => {
        const createdLocation = await _locationRepository.createMany(newLocations);
        return createdLocation;
    }
}