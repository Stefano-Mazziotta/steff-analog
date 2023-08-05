
import { Film, Prisma, PrismaClient } from '@prisma/client';
import { FilmRepository } from '../domain/FilmRepository';

export function createApiFilmRepository(): FilmRepository {
    const cache = new Map<number, Film>();
    const prisma = new PrismaClient();

    async function create(newFilm: Prisma.FilmCreateInput, ): Promise<Film> {
        const createdFilm = await prisma.film.create({
            data: newFilm
        })

        return createdFilm
    }

    async function createMany(newFilms: Prisma.FilmCreateManyInput[] ): Promise<Prisma.BatchPayload> {
        const createdFilms = await prisma.film.createMany({
            data: newFilms
        })

        return createdFilms
    }

    return {
        create,
        createMany
    };
}