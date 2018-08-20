/* Load Modules */
const express = require("express");
const router = express.Router();

/* Load controller */
const CarController = require("../controllers/carsController");
const carController = new CarController();

/**
 * Car Entity routes
 */
router.get("/:id", function(req, res) {
  carController.findById(req, res);
});

router.get("/", function(req, res) {
  carController.findAll(req, res);
});

router.put("/:id", function(req, res) {
  req.body.id = req.params.id;
  carController.update(req, res);
});

router.post("/", function(req, res) {
  carController.insert(req, res);
});

router.delete("/:id", function(req, res) {
  carController.deleteById(req, res);
});

module.exports = router;
