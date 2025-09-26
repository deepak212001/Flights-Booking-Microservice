const express = require("express");
const { InfoController } = require("../../controllers");

const router = express.Router();

// router.get("/info", info);
router.get("/info", InfoController.info);

module.exports = router;
