const _ = require("lodash");

/* Load Cars Data Access Object */
const CarBrandsDao = require("../dao/carBrandsDao");

/* Load Controller Common function */
const ControllerCommon = require("./common/controllerCommon");

/**
 * Cars Controller
 */
class CarsController {
  constructor() {
    this.carBrandsDao = new CarBrandsDao();
    this.common = new ControllerCommon();
  }

  /**
   * Tries to find an entity using its Id / Primary Key
   * @params req, res
   * @return entity
   */
  findById(req, res) {
    let id = req.params.id;

    this.carBrandsDao
      .findById(id)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  /**
   * Finds all entities.
   * @return all entities
   */
  findAll(req, res) {
    this.carBrandsDao
      .findAll(req.query)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  /**
   * Updates the given entity in the database
   * @params req, res
   * @return true if the entity has been updated, false if not found and not updated
   */
  update(req, res) {
    let person = _.pick(req.body, ["id", "name"]);

    return this.carBrandsDao
      .update(person)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  }

  /**
   * Creates the given entity in the database
   * @params req, res
   * returns database insertion status
   */
  insert(req, res) {
    let person = _.pick(req.body, ["name"]);

    return this.carBrandsDao
      .insert(person)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  }

  /**
   * Deletes an entity using its Id / Primary Key
   * @params req, res
   * returns database deletion status
   */
  deleteById(req, res) {
    let id = req.params.id;

    this.carBrandsDao
      .deleteById(id)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  }
}

module.exports = CarsController;
