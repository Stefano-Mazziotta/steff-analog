import { FilmRepository } from "../../domain/FilmRepository"; 
import { Film, Prisma } from "@prisma/client";

export function createFilm(filmRepository: FilmRepository): (newFilm: Prisma.FilmCreateInput) => Promise<Film> {
    return async (newFilm: Prisma.FilmCreateInput): Promise<Film> => {
        const createdFilm = await filmRepository.create(newFilm);
        return createdFilm;
    }
}