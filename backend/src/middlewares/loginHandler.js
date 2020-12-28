module.exports = (request, response, next) => {
  if (request.user) {
    next();
  } else {
    response.sendStatus(401);
  }
}