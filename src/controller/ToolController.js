const Tools = require("../models/Tools");

class ToolController {
  async findOne(req, res) {
    const filtro = await Tools.find(req.query);

    return res.json({ filtro });
  }

  async store(req, res) {
    try {
      const created = await Tools.create(req.body);

      return res.status(201).send(created);
    } catch (error) {
      res.status(400).send({ error: "Registration failed" });
    }
  }

  async remove(req, res) {
    try {
      await Tools.findOneAndDelete(req.params.id);

      return res.status(204).send();
    } catch (error) {
      res.status(404).send({ error: "An error has occurred" });
    }
  }
}
module.exports = new ToolController();
