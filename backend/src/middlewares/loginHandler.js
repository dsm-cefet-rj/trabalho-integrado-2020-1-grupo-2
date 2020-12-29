module.exports = (request, response, next) => {
  if (request.user) {
    next();
  } else {
    response.status(401).json({ error: '401: Unauthorized'});
  }
}