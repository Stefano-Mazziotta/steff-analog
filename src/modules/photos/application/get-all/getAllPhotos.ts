import { Photo } from "@prisma/client";
import { PhotoRepository } from "../../domain/PhotoRepository";

export function getAllPhotos(_photoRepository: PhotoRepository): () => Promise<Photo[]> {
	return async (): Promise<Photo[]> => {
		return await _photoRepository.getAll()
	};
}