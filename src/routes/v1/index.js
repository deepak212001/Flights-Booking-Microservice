const express = require("express");
const { InfoController } = require("../../controllers");

const router = express.Router();

// router.get("/info", info);
router.get("/info", InfoController.info);

const bookingRoutes = require('./booking.route');
router.use('/bookings', bookingRoutes);

module.exports = router;
