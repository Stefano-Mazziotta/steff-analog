import { QualityRepository } from "../../domain/QualityRepository"; 
import { Quality, Prisma } from "@prisma/client";

export function createQuality(_qualityRepository: QualityRepository): (newQuality: Prisma.QualityCreateInput) => Promise<Quality> {
    return async (newQuality: Prisma.QualityCreateInput): Promise<Quality> => {
        const createdQuality = await _qualityRepository.create(newQuality);
        return createdQuality;
    }
}