import { PrismaClient, Country, City, Location, Prisma, Quality  } from '@prisma/client'

import FilmRepository from '@/backend/entities/film/film.repository';
import CameraRepository from '@/backend/entities/camera/camera.repository';
import PhotoRepository from '@/backend/entities/photo/photo.repository';
import LinkRepository from '@/backend/entities/link/link.repository';

import seedCountry from './seedCountry';
import seedCity from './seedCity';
import seedLocation from './seedLocation';
import seedQuality from './seedQuality';

const prisma = new PrismaClient()

async function seed() {
  try {

    const _cameraRepository = new CameraRepository()
    const _filmRepository = new FilmRepository()
    const _photoRepository = new PhotoRepository()
    const _linkRepository = new LinkRepository()
    
    await seedCountry(prisma)
    await seedCity(prisma)
    await seedLocation(prisma)
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
    
    const pentaxCamera = await _cameraRepository.create(prisma, newCamera)

    // create film
    const newFilm:Prisma.FilmCreateInput = {
      name: "Kodak Ektar 100",
      createdYear: 2008,
      country: {
        connect: japan
      }
    }    
    const ektar100Film = await _filmRepository.create(prisma, newFilm)
    
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