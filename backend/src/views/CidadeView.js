module.exports = {
  render(cidade) {
    return {
      id:        cidade?._id,
      weatherID: cidade?.weatherID,
      name:      cidade?.name,
      latitude:  cidade?.latitude,
      longitude: cidade?.longitude,
      notas:     cidade?.notas,
    };
  },
  renderMany(cidades){
    return cidades.map(cidade => this.render(cidade));
  },
}