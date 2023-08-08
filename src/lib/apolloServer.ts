import { GraphQLFormattedError } from "graphql";

export function formatError(formattedError: GraphQLFormattedError): GraphQLFormattedError {
  if (formattedError.extensions?.code === "BAD_REQUEST") {
    return {
      message: "Bad request. Please check your input."
    };
  }

  return {
    message: "An error occurred. Please try again later."
  };
}