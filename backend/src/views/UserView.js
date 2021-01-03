module.exports = {
  render(user) {
    return {
      id:       user?._id,
      googleID: user?.googleID,
      email:    user?.email,
    };
  },
  renderMany(users){
    return users.map(user => this.render(user));
  },
}