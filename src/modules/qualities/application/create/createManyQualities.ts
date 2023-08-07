import { QualityRepository } from "../../domain/QualityRepository"; 
import { Quality, Prisma } from "@prisma/client";

export function createManyQualities(_qualityRepository: QualityRepository): (newQualities: Prisma.QualityCreateManyInput[]) => Promise<Prisma.BatchPayload> {
    return async (newQualities: Prisma.QualityCreateManyInput[]): Promise<Prisma.BatchPayload> => {
        const createdQualities = await _qualityRepository.createMany(newQualities);
        return createdQualities;
    }
}