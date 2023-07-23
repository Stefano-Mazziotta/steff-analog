import { PrismaClient, Prisma, City } from "@prisma/client";
import LocationRepository from "@/backend/entities/location/location.repository";

export default async function seedLocation(prisma: PrismaClient): Promise<void> {
    const _locationRepository = new LocationRepository()
  
    const rosario:City | null = await prisma.city.findFirst({
      where: {name: "Rosario"} 
    })
    const firenze:City | null = await prisma.city.findFirst({
      where: {name: "Firenze"} 
    })
  
    if(!rosario || !firenze) return;
  
    const newLocations: Prisma.LocationCreateManyInput[] = [
      {
        name: "Monumento a la Bandera Argentina",
        cityId: rosario.id
      },
      {
        name: "Parque de España",
        cityId: rosario.id
      },
      {
        name: "Galleria dell'Accademia di Firenze",
        cityId: firenze.id
      }
    ]
    await _locationRepository.createMany(prisma, newLocations)
  }