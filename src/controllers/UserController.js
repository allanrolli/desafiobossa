const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

class UserController {
  async findAll(req, res) {
    const list = await User.find();

    return res.json({ list });
  }

  async store(req, res) {
    const { email } = req.body;
    try {
      if (await User.findOne({ email }))
        return res.status(400).json({ error: "User already exists" });

      const user = await User.create(req.body);
      const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: authConfig.ttl,
      });
      user.password = undefined;

      return res.status(201).send({ user, token });
    } catch (error) {
      res.status(400).send({ error: "Registration failed" });
    }
  }

  async authenticate(req, res) {
    const email, password  = req.body;

    try {
      const user = await User.findOne({ email }).select("+password");

      if (!user || !(await bcrypt.compare(password, user.password)))
        return res.status(401).send({ error: "Wrong user or email" });

      user.password = undefined;

      //const token = this.generateToken(user);
      const token = jwt.sign({ id: user.id }, authConfig.secret, {
        expiresIn: authConfig.ttl,
      });
      console.log(token);
      res.send({ user, token });
    } catch (error) {
      res.send(error);
    }
  }

  // async generateToken({ user }) {
  //   return jwt.sign({ user }, authConfig.secret, {
  //     expiresIn: authConfig.ttl,
  //   });
  // }
}

module.exports = new UserController();
