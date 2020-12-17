module.exports = (request, response, next) => {
  response.status(404).json({ error: '404: Endpoint Not Found'});
}