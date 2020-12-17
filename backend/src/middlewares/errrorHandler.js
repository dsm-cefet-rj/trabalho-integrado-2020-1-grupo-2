module.exports = (error, request, response, next) => {
  response.status(response.statusCode).json({
    message: error.message,
    stack:   error.stack,
  });
}