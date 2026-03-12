/**
 * Manager for Error API Calls.
 * @param res - Express Response object.
 * @param error - Error details.
 * @param message - Optional message to describe error.
 * @param statusCode - HTTP status Code, Default 200 (OK).
 */
export const handleError = (res, error = null, message = 'An error has occurred.', statusCode = 500) => {
    res.status(statusCode).json({
        success: false,
        message,
        error: error?.message || error,
    });
};

/**
 * Manager for Successfull API Calls.
 * @param res - Express Response object.
 * @param data - Data to return to client
 * @param message - Optional message to describe successful operation
 * @param statusCode - HTTP status Code, Default 200 (OK).
 */
export const handleSuccess = (res, data = null, message = 'Successful operation.', statusCode = 200) => {
    res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};
