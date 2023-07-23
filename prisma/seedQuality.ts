import { PrismaClient, Prisma } from "@prisma/client"
import QualityRepository from "@/backend/entities/quality/quality.repository"

export default async function seedQuality(prisma: PrismaClient): Promise<void> {
    const _qualityRepository = new QualityRepository()
  
    const newQualities: Prisma.QualityCreateManyInput[] = [
      {
        name: "raw"
      },
      {
        name: "full"
      },
      {
        name: "regular",
      },
      {
        name: "small"    
      },
      {
        name: "thumb"
      }
    ]
  
    await _qualityRepository.createMany(prisma, newQualities)
  }
  