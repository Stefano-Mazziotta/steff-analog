import { getApolloClient } from "@/lib/client/apolloClient"
import { gql } from "@apollo/client"
import Image from "next/image"

import styles from './styles.module.css';

const query = gql`
  query GetPhotos {
    getPhotos {
    id
    height
    width
    description
    shootDate
    src {
      regular {
        url
      }      
    }
  }
  }
`
export default async function HomePage() {
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({ query })
  
  const photos:IPhoto[] = data.getPhotos;
  
  return (
    <main>
      <section className={styles.gallery}>
      {photos.map(photo => {
        return (
          <ul key={photo.id}>
            <li className={styles.photoContainer}>
              <Image 
                src={photo.src.regular.url}
                alt={photo.description} 
                width={200} 
                height={200}
                className={styles.photo}
              />
            </li>
            <li>{photo.description}</li>
            <li>{photo.shootDate}</li>
          </ul>
        )
        })}
      </section>
    </main>
  )
}
