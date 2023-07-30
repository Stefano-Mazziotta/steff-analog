
import { Camera, Prisma, PrismaClient } from '@prisma/client';
import { CameraRepository } from '../domain/CameraRepository';


export function createApiCameraRepository(): CameraRepository {
    const cache = new Map<number, Camera>();
    const prisma = new PrismaClient();

    async function create(newCamera: Prisma.CameraCreateInput, ): Promise<Camera> {
        const createdCamera = await prisma.camera.create({
            data: newCamera
        })

        return createdCamera
    }

    async function createMany(newCameras: Prisma.CameraCreateManyInput[] ): Promise<Prisma.BatchPayload> {
        const createdCameras = await prisma.camera.createMany({
            data: newCameras
        })

        return createdCameras
    }

    return {
        create,
        createMany
    };
}