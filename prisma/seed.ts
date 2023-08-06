import { PrismaClient, Country, City, Location, Prisma, Quality  } from '@prisma/client'

import PhotoRepository from '@/backend/entities/photo/photo.repository';
import LinkRepository from '@/backend/entities/link/link.repository';

import { seedCountry } from './seedCountry';
import seedCity from './seedCity';
import seedLocation from './seedLocation';
import seedQuality from './seedQuality';

import { createCamera } from '@/modules/cameras/application/create/createCamera';
import { createFilm } from '@/modules/films/application/create/createFilm';

import { createApiCameraRepository } from '@/modules/cameras/infrastructure/ApiCameraRepository';
import { createApiFilmRepository } from '@/modules/films/infrastructure/apiFilmRepository';
import { createApiCountryRepository } from '@/modules/countries/infrastructure/apiCountryRepository';
import { createApiCityRepository } from '@/modules/cities/infrastructure/apiCityRepository';
import { createApiLocationRepository } from '@/modules/locations/infrastructure/apiLocationRepository';

const prisma = new PrismaClient()

async function seed() {
  try {

    const _countryRepository = createApiCountryRepository()
    const _cityRepository = createApiCityRepository()
    const _cameraRepository = createApiCameraRepository()
    const _filmRepository = createApiFilmRepository()
    const _locationRepository = createApiLocationRepository()
    const _photoRepository = new PhotoRepository()
    const _linkRepository = new LinkRepository()
    
    await seedCountry(_countryRepository)
    await seedCity(_cityRepository, _countryRepository)
    await seedLocation(_locationRepository, _cityRepository)
    await seedQuality(prisma)

    // Create camera
    const japan:Country | null = await prisma.country.findFirst({
      where: {name: "Japan"} 
    })
    if (!japan) return
    
    const newCamera:Prisma.CameraCreateInput = {
      name: "Asahi Pentax K1000",
      createdYear: 1976,
      country: {
        connect: japan
      }
    }
    
    const pentaxCamera = await createCamera(_cameraRepository)(newCamera)

    // create film
    const newFilm:Prisma.FilmCreateInput = {
      name: "Kodak Ektar 100",
      createdYear: 2008,
      country: {
        connect: japan
      }
    }    
    const ektar100Film = await createFilm(_filmRepository)(newFilm);
    
    const galleriaAcademiaLocation:Location | null = await prisma.location.findFirst({
      where: {name: "Galleria dell'Accademia di Firenze"} 
    })

    if(!galleriaAcademiaLocation) return

    // Create photos
    const newPhoto:Prisma.PhotoCreateInput = {
      height: 2056,
      width: 3328,
      title: "Il David",
      description: "Il David di Micheleangelo",
      shootDate: new Date("2022-11-01"),
      published: true,
      film: {
        connect: ektar100Film
      },
      camera: {
        connect: pentaxCamera
      },
      location: {
        connect: galleriaAcademiaLocation
      },
      createdAt: new Date(),
      updatedAt: null,
      
    }
    const davidPhoto = await _photoRepository.create(prisma, newPhoto)    
    await _linkRepository.create(prisma, davidPhoto.id, "david-2")

  } catch (error) {
    throw new Error(`Poblate db error: ${error}`)
  }
}

seed()
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })