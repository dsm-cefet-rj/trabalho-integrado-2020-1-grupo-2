module.exports = {
  render(cidade) {
    return {
      id:        cidade._id,
      name:      cidade.name,
      latitude:  cidade.latitude,
      longitude: cidade.longitude,
      notas:     cidade.notas,
    };
  },
  renderMany(cidades){
    cidades.map(cidade => this.render(cidade));
  },
}