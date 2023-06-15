import { getApolloClient } from "@/lib/client/apolloClient"
import { gql } from "@apollo/client"
import Image from "next/image"

import styles from './styles.module.css';
import { Gallery } from "@/components/gallery";

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
      <Gallery photos={photos} />
    </main>
  )
}
