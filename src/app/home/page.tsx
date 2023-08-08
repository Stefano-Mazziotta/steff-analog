import { getApolloClient } from "@/lib/apolloClient"
import { gql } from "@apollo/client"

import styles from './styles.module.css';
import { Gallery } from "@/components/gallery";
import { Photo } from "@prisma/client";

const query = gql`
  query getPhotos {
    getPhotos {
      id
      width
      height
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
  const { data } = await apolloClient.query({ query });
  
  const photos:Photo[] = data.getPhotos;
  
  return (
    <main>
      <Gallery photos={photos} />
    </main>
  )
}
