const express = require("express");
const Tools = require("./controller/ToolController");
const router = express.Router();

router.get("/list", Tools.findAll);
router.get("/tools", Tools.findOne);
router.post("/tools", Tools.store);
router.delete("/tools/:id", Tools.remove);

module.exports = router;
