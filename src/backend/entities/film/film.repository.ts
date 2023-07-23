import { PrismaClient, Prisma, Film } from "@prisma/client"

export default class FilmRepository {

    public async create(prisma: PrismaClient, newFilm: Prisma.FilmCreateInput): Promise<Film> {
        const createdFilm = await prisma.film.create({
            data: newFilm
        })
        return createdFilm
    }
}