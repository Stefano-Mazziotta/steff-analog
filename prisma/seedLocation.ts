import { Prisma, City } from "@prisma/client";
import { LocationRepository } from "@/modules/locations/domain/LocationRepository";
import { findCityByName } from "@/modules/cities/application/find/findCityByName";
import { CityRepository } from "@/modules/cities/domain/CityRepository";
import { createManyLocations } from "@/modules/locations/application/create/createManyLocations";

export default async function seedLocation(_locationRepository: LocationRepository, _cityRepository: CityRepository): Promise<void> {
  
  const rosario:City | null = await findCityByName(_cityRepository)("Rosario")
  const firenze:City | null = await findCityByName(_cityRepository)("Firenze")

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

  await createManyLocations(_locationRepository)(newLocations)
}