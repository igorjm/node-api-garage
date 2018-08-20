/* Load Modules */
const express = require("express");
const router = express.Router();

/* Load controller */
const CarBrandsController = require("../controllers/carBrandsController");
const carBrandsController = new CarBrandsController();

/**
 * Car Entity routes
 */
router.get("/:id", function(req, res) {
  carBrandsController.findById(req, res);
});

router.get("/", function(req, res) {
  carBrandsController.findAll(res);
});

router.put("/:id", function(req, res) {
  req.body.id = req.params.id;
  carBrandsController.update(req, res);
});

router.post("/", function(req, res) {
  carBrandsController.insert(req, res);
});

router.delete("/:id", function(req, res) {
  carBrandsController.deleteById(req, res);
});

module.exports = router;
