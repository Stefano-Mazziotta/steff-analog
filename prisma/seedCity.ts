import { Prisma, Country } from "@prisma/client";

import { CityRepository } from "@/modules/cities/domain/CityRepository";
import { CountryRepository } from "@/modules/countries/domain/CountryRepository";

import { createManyCities } from "../src/modules/cities/application/create/createManyCities";
import { getCountryByName } from "../src/modules/countries/application/get/getCountryByName";

export default async function seedCity(_cityRepository: CityRepository, _countryRepository: CountryRepository): Promise<void> {
    
    const argentina:Country | null = await getCountryByName(_countryRepository)('Argentina')
    const italy:Country | null = await getCountryByName(_countryRepository)('Italy')
  
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
    await createManyCities(_cityRepository)(newCities)
  }