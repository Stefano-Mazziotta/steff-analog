import { getApolloClient } from "@/lib/client/apolloClient"
import { gql } from "@apollo/client"
import { Key } from "react"

interface IPhotosDTO {
  id: Key
  description: String
  shootDate: String
}

const query = gql`
  query GetPhotos {
    getPhotos {
      id
      height
      width
      description
      shootDate
    }
  }
`
export default async function HomePage() {
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({ query })
  
  const photos:IPhotosDTO[] = data.getPhotos;
  
  return (
    <main>
      {photos.map(photo => {
        return (
          <ul key={photo.id}>
            <li>{photo.description}</li>
            <li>{photo.shootDate}</li>
          </ul>
        )
        })}
    </main>
  )
}
