module.exports = (request, response, next) => {
  try {
    response.json({
      message: "API home route",
      routes: [
        "/cidades",
        "/cidades:id",
        "/notas",
        "/notas:id"
      ]
    });
  } catch(erorr) {
    next(error);
  }
}