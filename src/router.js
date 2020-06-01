const express = require("express");
const Tools = require("./controller/ToolController");
const User = require("./controller/UserController");
const authMiddleware = require("./middlewares/auth");
const router = express.Router();

router.post("/v1/authenticate", User.authenticate);

router.get("/v1/user", authMiddleware, User.findAll);
router.get("/v1/tools", authMiddleware, Tools.findOne);
router.post("/v1/tools", authMiddleware, Tools.store);
router.post("/v1/user", authMiddleware, User.store);
router.delete("/v1/tools/:id", authMiddleware, Tools.remove);

router.get("/", (req, res) => {
  console.log("Entrei aqui");

  return res.send("Esta é a página principal");
});

module.exports = router;
