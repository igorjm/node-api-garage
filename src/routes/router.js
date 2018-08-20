/**
 * Express Router configuration
 */
const express = require("express");
const router = express.Router();

/* API routes */
router.use("/cars", require("./carsRoute"));
router.use("/car_brands", require("./carBrandsRoute"));
router.use("/persons", require("./personsRoute"));

module.exports = router;
