import { PrismaClient, Country, Location, Prisma, Quality, Photo } from '@prisma/client'

import seedCountry from './seedCountry';
import seedCity from './seedCity';
import seedLocation from './seedLocation';
import seedQuality from './seedQuality';

import { createApiCameraRepository } from '@/modules/cameras/infrastructure/ApiCameraRepository';
import { createApiFilmRepository } from '@/modules/films/infrastructure/apiFilmRepository';
import { createApiCountryRepository } from '@/modules/countries/infrastructure/apiCountryRepository';
import { createApiCityRepository } from '@/modules/cities/infrastructure/apiCityRepository';
import { createApiLocationRepository } from '@/modules/locations/infrastructure/apiLocationRepository';
import { createApiQualityRepository } from '@/modules/qualities/infrastructure/apiQualityRepository';
import { createApiLinkRepository } from '@/modules/links/infrastructure/apiLinkRepository';
import { createApiPhotoRepository } from '@/modules/photos/infrastructure/apiPhotoRepository';

import { createCamera } from '@/modules/cameras/application/create/createCamera';
import { createFilm } from '@/modules/films/application/create/createFilm';
import { getAllQualities } from '@/modules/qualities/application/get-all/getAllQualities';
import { createManyLinks } from '@/modules/links/application/create/createManyLinks';
import { createPhoto } from '@/modules/photos/application/create/createPhoto';
import { getCountryByName } from '@/modules/countries/application/get/getCountryByName';
import { getLocationByName } from '@/modules/locations/application/get/getLocationByName';

import { QualityRepository } from '@/modules/qualities/domain/QualityRepository';
import { LinkRepository } from '@/modules/links/domain/LinkRepository';


const prisma = new PrismaClient()

async function createLinksFromPhoto(photo: Photo, _qualityRepository: QualityRepository, _linkRepository: LinkRepository){
  const qualities: Quality[] = await getAllQualities(_qualityRepository)()    
  const allLinks: Prisma.LinkCreateManyInput[] = []
  const fileName = "david-2"
  
  qualities.forEach(quality => {
    const {id, name} = quality
    const newLink: Prisma.LinkCreateManyInput = {
      url: `gallery/${name}/${fileName}-${name}`,
      photoId: photo.id,
      qualityId: id
    }

    allLinks.push(newLink)
  })

  await createManyLinks(_linkRepository)(allLinks)  
}

async function seed() {
  try {

    const _countryRepository = createApiCountryRepository()
    const _cityRepository = createApiCityRepository()
    const _cameraRepository = createApiCameraRepository()
    const _filmRepository = createApiFilmRepository()
    const _locationRepository = createApiLocationRepository()
    const _qualityRepository = createApiQualityRepository()
    const _linkRepository = createApiLinkRepository()
    const _photoRepository = createApiPhotoRepository()
    
    await seedCountry(_countryRepository)
    await seedCity(_cityRepository, _countryRepository)
    await seedLocation(_locationRepository, _cityRepository)
    await seedQuality(_qualityRepository)

    // Create camera
    const japan:Country | null =  await getCountryByName(_countryRepository)("Japan")
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
    
    const galleriaAcademiaLocation:Location | null = await getLocationByName(_locationRepository)("Galleria dell'Accademia di Firenze")
    
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
    const davidPhoto = await createPhoto(_photoRepository)(newPhoto)    
    await createLinksFromPhoto(davidPhoto, _qualityRepository, _linkRepository);

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