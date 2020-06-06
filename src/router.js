const express = require("express");
const path = require("path");
const cors = require("cors");
const Tools = require("./controllers/ToolController");
const User = require("./controllers/UserController");
const authMiddleware = require("./middlewares/auth");
const router = express.Router();

router.use(cors());
router.post("/authenticate", User.authenticate);

router.get("/user", authMiddleware, User.index);
router.get("/tools", authMiddleware, Tools.show);
router.post("/tools", authMiddleware, Tools.create);
router.post("/user", User.create);
router.delete("/tools/:id", authMiddleware, Tools.delete);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/docs/index.html"));
});

module.exports = router;
