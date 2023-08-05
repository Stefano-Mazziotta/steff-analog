import { Film, Prisma } from "@prisma/client";

export interface FilmRepository {
	create: (newFilm: Prisma.FilmCreateInput) => Promise<Film>;
    createMany: (newFilms: Prisma.FilmCreateManyInput[]) => Promise<Prisma.BatchPayload>
}