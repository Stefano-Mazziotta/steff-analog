import { CameraRepository } from "../../domain/CameraRepository";
import { Camera, Prisma } from "@prisma/client";

export function createCamera(
	cameraRepository: CameraRepository,
): (newCamera: Prisma.CameraCreateInput) => Promise<Camera> {
	
    return async (newCamera: Prisma.CameraCreateInput): Promise<Camera> => {
		const createdCamera = await cameraRepository.create(newCamera);
		return createdCamera;
	};
}