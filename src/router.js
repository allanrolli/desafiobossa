const express = require("express");
const Tools = require("./controller/ToolController");
const User = require("./controller/UserController");
const router = express.Router();

router.get("/list", Tools.findAll);
router.get("/listUser", User.findAll);
router.get("/tools", Tools.findOne);
router.post("/tools", Tools.store);
router.post("/createUser", User.store);
router.delete("/tools/:id", Tools.remove);

module.exports = router;
