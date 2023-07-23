import { PrismaClient, Prisma, Country } from "@prisma/client";
import CityRepository from "@/backend/entities/city/city.repository";

export default async function seedCity(prisma:PrismaClient): Promise<void> {
    const _cityRepository = new CityRepository()
    const argentina:Country | null = await prisma.country.findFirst({
      where: {name: "Argentina"} 
    })
    const italy:Country | null = await prisma.country.findFirst({
      where: {name: "Italy"} 
    })
  
    if(!argentina || !italy) return;
  
    const newCities:Prisma.CityCreateManyInput[] = [
      {
        name: 'Rosario',
        countryId: argentina.id
      },
      {
        name: 'Buenos Aires',
        countryId: argentina.id
      },
      {
        name: 'Mar del Plata',
        countryId: argentina.id
      },
      {
        name: 'Firenze',
        countryId: italy.id
      },
      {
        name: 'Milano',
        countryId: italy.id
      },
      {
        name: 'Venezia',
        countryId: italy.id
      },
      {
        name: 'Roma',
        countryId: italy.id
      }
    ]
    await _cityRepository.createMany(prisma, newCities)
  }