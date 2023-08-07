import { Quality } from "@prisma/client";
import { QualityRepository } from "../../domain/QualityRepository";

export function getAllQualities(_qualityRepository: QualityRepository,): () => Promise<Quality[]> {
	return async (): Promise<Quality[]> => {
		return await _qualityRepository.getAll()
	};
}