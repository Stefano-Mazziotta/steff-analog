import { PrismaClient, Country, City, Location, Photo, Prisma, Camera, Film, Quality  } from '@prisma/client'

/*
*  - mover los métodos que impactan a la base de datos [repository pattern]
 *  - mejorar respuesta de las funciones "createMany". true si se creó, false si no se creó.
 *  - revisar que es "Prisma.BatchPayload" -> respuesta de create many
 * 
*/

// --- Ejemplo 2 prisma
// function queryFromCompany(companyId: number, where: Prisma.UserWhereInput) {
//   return prisma.user.findMany({
//     where: { company: { id: companyId }, ...where },
//   })
// }
// const user = await queryFromCompany(1, { name: 'Paul' })

// --- Ejemplo 2 prisma
// function fromCompany(companyId: number): Prisma.UserWhereInput {
//   return { companyId }
// }

// function filterRecent(
//   start: Prisma.DateTimeFilter['equals'],
//   end: Prisma.DateTimeFilter['equals']
// ): Pick<Prisma.UserWhereInput, 'createdAt'> {
//   return {
//     createdAt: {
//       gte: start,
//       lte: end,
//     },
//   }
// }

// const users = await prisma.user.findMany({
//     where: {
//       ...fromCompany(companyId),
//       ...filterRecent(startDate, endDate),
//     },
//   })

const prisma = new PrismaClient()

// --- save to database functions --- //

async function createCountry(newCountry:Prisma.CountryCreateInput): Promise<Country> {
  const createdCountry = await prisma.country.create({
    data: newCountry,
  })

  return createdCountry
}

async function createManyCountries(newCountries: Prisma.CountryCreateManyInput[]): Promise<Prisma.BatchPayload>{
  const prismaResponse = await prisma.country.createMany({
    data: newCountries
  })

  return prismaResponse
}

async function createCity(newCity:Prisma.CityCreateInput): Promise<City> {
  const { name, country } = newCity;

  const createdCity = await prisma.city.create({
    data: {
      name,
      country
    }
  })

  return createdCity
}

async function createManyCities(newCities: Prisma.CityCreateManyInput[]): Promise<Prisma.BatchPayload> {
  const prismaResponse = await prisma.city.createMany({
    data: newCities,
  })

  return prismaResponse
}

async function createLocation(newLocation: Prisma.LocationCreateInput): Promise<Location> {
  const {name, city} = newLocation
  const location = await prisma.location.create({
    data: {
      name,
      city
    },
  })

  return location
}

async function createManyLocations(newLocations: Prisma.LocationCreateManyInput[]): Promise<Prisma.BatchPayload> {
  const batchPayload = await prisma.location.createMany({
    data: newLocations
  })

  return batchPayload
}

async function createCamera(newCamera: Prisma.CameraCreateInput): Promise<Camera> {
  const createdCamera = await prisma.camera.create({
    data: newCamera
  })
  return createdCamera
}

async function createFilm(newFilm: Prisma.FilmCreateInput): Promise<Film> {
  const createdFilm = await prisma.film.create({
    data: newFilm
  })
  return createdFilm
}

async function createPhoto(newPhoto: Prisma.PhotoCreateInput): Promise<Photo> {
  const createdPhoto = await prisma.photo.create({
    data: newPhoto
  })

  return createdPhoto
}

async function createManyQualities(newQualities: Prisma.QualityCreateManyInput[]): Promise<Prisma.BatchPayload> {
  const batchPayload = await prisma.quality.createMany({
    data: newQualities
  })
  return batchPayload
}

async function createSrc(photoId: number, fileName: string){
  const qualities = await prisma.quality.findMany()
    qualities.forEach(async quality => {
      const { id, name } = quality

      await prisma.src.create({
        data: {
          url: `galery/${name}/${fileName}-${name}`,
          photoId: photoId,
          qualityId: id
        }
      })

    })
}
// --- end --- //

// --- seed functions --- //
async function seedCountry(): Promise<void> {
  const newCountries: Prisma.CountryCreateManyInput[] = [
    { name: "Argentina"},
    { name: "Italy"},
    { name: "Japan"},
  ]

  await createManyCountries(newCountries);
}
async function seedCity(): Promise<void> {
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
  await createManyCities(newCities)
}
async function seedLocation(): Promise<void> {
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
  await createManyLocations(newLocations)
}
async function seedQuality(): Promise<void> {
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

  await createManyQualities(newQualities)
}
// --- end --- //

async function seed() {
  try {
    
    await seedCountry()
    await seedCity()
    await seedLocation()
    await seedQuality()

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
    const pentaxCamera = await createCamera(newCamera)

    // create film
    const newFilm:Prisma.FilmCreateInput = {
      name: "Kodak Ektar 100",
      createdYear: 2008,
      country: {
        connect: japan
      }
    }    
    const ektar100Film = await createFilm(newFilm)
    
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
    const davidPhoto = await createPhoto(newPhoto)    
    await createSrc(davidPhoto.id, "david-2")

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