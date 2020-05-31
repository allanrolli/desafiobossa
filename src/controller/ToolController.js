const Tools = require("../models/Tools");

class ToolController {
  async findAll(req, res) {
    const list = await Tools.find();

    return res.json({ list });
  }

  async findOne(req, res) {
    const filtro = await Tools.find(req.query);

    return res.json(filtro);
  }

  async store(req, res) {
    const create = await Tools.create(req.body);

    return res.status(201).send(create);
  }

  async remove(req, res) {
    await Tools.findOneAndDelete(req.params.id);

    return res.status(204).send();
  }
}
module.exports = new ToolController();
