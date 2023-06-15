import { getApolloClient } from "@/lib/client/apolloClient"
import { gql } from "@apollo/client"

import styles from './styles.module.css';
import { Gallery } from "@/components/gallery";

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
  // const { data } = await apolloClient.query({ query });
  
  // const photos:IPhoto[] = data.getPhotos;
  
  return (
    <p>test</p>
    // <main>
    //   <Gallery photos={photos} />
    // </main>
  )
}
