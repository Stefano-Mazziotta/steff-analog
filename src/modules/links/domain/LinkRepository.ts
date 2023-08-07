import { Link, Prisma } from "@prisma/client";

export interface LinkRepository {
	create: (newLink: Prisma.LinkCreateInput) => Promise<Link>;
    createMany: (newLinks: Prisma.LinkCreateManyInput[]) => Promise<Prisma.BatchPayload>
}