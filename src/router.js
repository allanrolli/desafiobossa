const express = require("express");
const Tools = require("./controller/ToolController");
const User = require("./controller/UserController");
const authMiddleware = require("./middlewares/auth");
const router = express.Router();

router.post("/authenticate", User.authenticate);

router.get("/list", authMiddleware, Tools.findAll);
router.get("/listUser", authMiddleware, User.findAll);
router.get("/tools", authMiddleware, Tools.findOne);
router.post("/tools", authMiddleware, Tools.store);
router.post("/createUser", authMiddleware, User.store);
router.delete("/tools/:id", authMiddleware, Tools.remove);

router.get("/", (req, res) => {
  console.log("Entrei aqui");

  return res.send("Esta é a página principal");
});

module.exports = router;
