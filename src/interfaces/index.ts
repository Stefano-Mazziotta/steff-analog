import { Photo, Category } from '@prisma/client'
  
interface Query {
  photos: Photo[];
  categories: Category[];
}

  