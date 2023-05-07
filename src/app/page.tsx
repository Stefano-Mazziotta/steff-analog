import { getApolloClient } from "@/lib/apolloClient"
import { gql } from "@apollo/client"

const query = gql`
  query 
    ExampleQuery {
      hello
    }
`
export default async function HomePage() {
  const apolloClient = getApolloClient();
  const { data } = await apolloClient.query({ query })
  return (
    <main>
      <h1>{data.hello}</h1>
    </main>
  )
}
