import { Photo, Category } from '@prisma/client'
  
interface IQuery {
  photos: Photo[];
  categories: Category[];
}

  