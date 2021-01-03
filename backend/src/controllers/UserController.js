const User     = require('../models/User');
const UserView = require('../views/UserView');

module.exports = {
  async index(request, response, next) {
    try {
      const users = await User.find();

      response.json(UserView.renderMany(users));
    } catch(error) {
      next(error);
    }
  },
  async show(request, response, next) {
    try {
      const user = request.user;

      response.json(UserView.render(user));
    } catch(error) {
      next(error);
    }
  },
  async store(request, response, next) {
    try {
      const user = await User.create(request.body);
      
      response.json(UserView.render(user));
    } catch(error) {
      next(error);
    }
  },
  async update(request, response, next) {
    try {
      const { id } = request.params;
      const user = await User.findById(id);

      user.updateOne(
        id,
        request.body,
        {new: true}
      );

      response.json(UserView.render(user));
    } catch(error) {
      next(error);
    }
  },
  async destroy(request, response, next) {
    try {
      const { id } = request.params;
      const user = await User.findById(id);

      user?.deleteOne();

      response.json(UserView.render(user));
    } catch(error) {
      next(error);
    }
  },
}