const _ = require("lodash");

/* Load Persons Data Access Object */
const PersonsDao = require("../dao/personsDao");

/* Load Controller Common function */
const ControllerCommon = require("./common/controllerCommon");

/**
 * Persons Controller
 */
class PersonsController {
  constructor() {
    this.personsDao = new PersonsDao();
    this.common = new ControllerCommon();
  }

  /**
   * Tries to find an entity using its Id / Primary Key
   * @params req, res
   * @return entity
   */
  findById(req, res) {
    let id = req.params.id;

    this.personsDao
      .findById(id)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  /**
   * Finds all entities.
   * @return all entities
   */
  findAll(req, res) {
    this.personsDao
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
    let person = _.pick(req.body, [
      "id",
      "first_name",
      "last_name",
      "birthdate",
      "cpf"
    ]);

    return this.personsDao
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
      "first_name",
      "last_name",
      "birthdate",
      "cpf"
    ]);

    return this.personsDao
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

    this.personsDao
      .deleteById(id)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  }
}

module.exports = PersonsController;
