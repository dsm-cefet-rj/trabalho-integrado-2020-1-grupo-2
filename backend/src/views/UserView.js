module.exports = {
  render(user) {
    return {
      id:       user?._id,
      googleID: user.googleID,
    };
  },
  renderMany(users){
    return users.map(user => this.render(user));
  },
}