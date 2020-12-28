module.exports = {
  render(user) {
    return {
      id:    user?._id,
      email: user?.email,
    };
  },
  renderMany(users){
    return users.map(user => this.render(user));
  },
}