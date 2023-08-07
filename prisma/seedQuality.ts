import { Prisma } from "@prisma/client"
import { QualityRepository } from "@/modules/qualities/domain/QualityRepository"
import { createManyQualities } from "@/modules/qualities/application/create/createManyQualities"

export default async function seedQuality(_qualityRepository: QualityRepository): Promise<void> {
  
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
  
    await createManyQualities(_qualityRepository)(newQualities)
  }
  