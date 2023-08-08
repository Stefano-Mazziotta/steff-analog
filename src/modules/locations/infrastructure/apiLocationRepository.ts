
import { Location, Prisma, PrismaClient } from '@prisma/client';
import { LocationRepository } from '../domain/LocationRepository';

export function createApiLocationRepository(): LocationRepository {
    const cache = new Map<number, Location>()
    const prisma = new PrismaClient()

    async function create(newLocation: Prisma.LocationCreateInput, ): Promise<Location> {
        const createdLocation = await prisma.location.create({
            data: newLocation
        })

        return createdLocation
    }

    async function createMany(newLocations: Prisma.LocationCreateManyInput[] ): Promise<Prisma.BatchPayload> {
        const createdLocations = await prisma.location.createMany({
            data: newLocations
        })

        return createdLocations
    }

    async function getByName(locationName: string): Promise<Location | null> {
        const foundLocation = await prisma.location.findFirst({
            where: {
                name: locationName
            }
        })

        return foundLocation
    }

    return {
        create,
        createMany,
        getByName
    }
}