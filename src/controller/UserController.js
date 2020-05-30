const User = require("../model/User");

class UserController {
  async findAll(req, res) {
    const list = await User.find();

    return res.json({ list });
  }

  async store(req, res) {
    const create = await User.create(req.body);
    return res.status(201).send(create);
  }
}

module.exports = new UserController();
