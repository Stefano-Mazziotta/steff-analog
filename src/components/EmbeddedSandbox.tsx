import { ApolloSandbox } from '@apollo/sandbox/react';
  
export function EmbeddedSandbox() {
  return (
    <ApolloSandbox
      initialEndpoint='https://steff-analog.vercel.app/graphql'
    />
  );
}