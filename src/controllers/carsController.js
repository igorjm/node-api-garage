const _ = require("lodash");

/* Load Cars Data Access Object */
const CarsDao = require("../dao/carsDao");

/* Load Controller Common function */
const ControllerCommon = require("./common/controllerCommon");

/**
 * Cars Controller
 */
class CarsController {
  constructor() {
    this.carsDao = new CarsDao();
    this.common = new ControllerCommon();
  }

  /**
   * Tries to find an entity using its Id / Primary Key
   * @params req, res
   * @return entity
   */
  findById(req, res) {
    let id = req.params.id;

    this.carsDao
      .findById(id)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  /**
   * Finds all entities.
   * @return all entities
   */
  findAll(res) {
    this.carsDao
      .findAll()
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  /**
   * Updates the given entity in the database
   * @params req, res
   * @return true if the entity has been updated, false if not found and not updated
   */
  update(req, res) {
    let person = _.pick(req.body, [
      "id",
      "name",
      "year_model",
      "year_manufactured",
      "id_car_brand"
    ]);

    return this.carsDao
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
    let person = _.pick(req.body, [
      "name",
      "year_model",
      "year_manufactured",
      "id_car_brand"
    ]);

    return this.carsDao
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

    this.carsDao
      .deleteById(id)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  }
}

module.exports = CarsController;
