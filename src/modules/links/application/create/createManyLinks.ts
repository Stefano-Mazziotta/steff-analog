import { LinkRepository } from "../../domain/LinkRepository"; 
import { Prisma } from "@prisma/client";

export function createManyLinks(_linkRepository: LinkRepository): (newLinks: Prisma.LinkCreateManyInput[]) => Promise<Prisma.BatchPayload> {
    return async (newLinks: Prisma.LinkCreateManyInput[]): Promise<Prisma.BatchPayload> => {
        const createdLinks = await _linkRepository.createMany(newLinks);
        return createdLinks;
    }
}