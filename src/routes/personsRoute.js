/* Load Modules */
const express = require("express");
const router = express.Router();

/* Load Controller */
const PersonsController = require("../controllers/personsController");
const personsController = new PersonsController();

/**
 * persons Entity routes
 */

router.get("/:id", function(req, res) {
  personsController.findById(req, res);
});

router.get("/", function(req, res) {
  personsController.findAll(res);
});

router.put("/:id", function(req, res) {
  req.body.id = req.params.id;
  personsController.update(req, res);
});

router.post("/", function(req, res) {
  personsController.insert(req, res);
});

router.delete("/:id", function(req, res) {
  personsController.deleteById(req, res);
});

module.exports = router;
