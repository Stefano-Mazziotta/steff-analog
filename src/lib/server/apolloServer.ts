import { GraphQLFormattedError } from "graphql";

export function formatError(formatedError: GraphQLFormattedError): GraphQLFormattedError {
    // Check if the error object contains any extensions
    if (formatedError.extensions && formatedError.extensions.code === "BAD_REQUEST") {
        // Customize the error message for the specific code
        const errorMessage = "Bad request. Please check your input.";
        return {
            message: errorMessage
        };
    }

    // Default error message
    const errorMessage = "An error occurred. Please try again later.";
    return {
        message: errorMessage
    };
}



