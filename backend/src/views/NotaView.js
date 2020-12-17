module.exports = {
  render(nota) {
    return {
      id:       nota._id,
      name:     nota.name,
      data:     nota.data,
      visits:   nota.visits,
      idCidade: nota.idCidade,
      created:  nota.created,
    };
  },
  renderMany(notas){
    notas.map(nota => this.render(nota));
  },
}