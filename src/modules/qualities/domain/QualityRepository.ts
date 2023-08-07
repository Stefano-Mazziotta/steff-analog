import { Quality, Prisma } from "@prisma/client";

export interface QualityRepository {
	create: (newQuality: Prisma.QualityCreateInput) => Promise<Quality>;
    createMany: (newQualities: Prisma.QualityCreateManyInput[]) => Promise<Prisma.BatchPayload>
    getAll: () => Promise<Quality[]>
}