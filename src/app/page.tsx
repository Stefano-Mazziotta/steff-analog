import { getApolloClient } from "@/lib/apolloClient"
import { gql } from "@apollo/client"

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
  
  const photos = data.getPhotos;
  
  return (
    <main>
      <h1>{photos.map(photo => {
        return (
          <ul key={photo.id}>
            <li>{photo.description}</li>
            <li>{photo.shootDate}</li>
          </ul>
        )
        })}</h1>
    </main>
  )
}
