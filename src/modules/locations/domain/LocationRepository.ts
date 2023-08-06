import { Location, Prisma } from "@prisma/client";

export interface LocationRepository {
	create: (newLocation: Prisma.LocationCreateInput) => Promise<Location>;
    createMany: (newLocations: Prisma.LocationCreateManyInput[]) => Promise<Prisma.BatchPayload>
}