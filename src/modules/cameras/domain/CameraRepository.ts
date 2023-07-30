import { Camera, Prisma } from "@prisma/client";

export interface CameraRepository {
	create: (newCamera: Prisma.CameraCreateInput) => Promise<Camera>;
    createMany: (newCameras: Prisma.CameraCreateManyInput[]) => Promise<Prisma.BatchPayload>
}