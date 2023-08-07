import { LinkRepository } from "../../domain/LinkRepository"; 
import { Link, Prisma } from "@prisma/client";

export function createLink(_linkRepository: LinkRepository): (newLink: Prisma.LinkCreateInput) => Promise<Link> {
    return async (newLink: Prisma.LinkCreateInput): Promise<Link> => {
        const createdLink = await _linkRepository.create(newLink);
        return createdLink;
    }
}