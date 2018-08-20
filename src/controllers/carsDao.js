const knex = require("../../db/knex");
const table = "car_models";

class CarsDao {
  constructor() {}

  findAll() {
    return knex.select().from(table);
  }

  findById(id) {
    return knex
      .select()
      .from(table)
      .where("id", id);
  }

  insert(car) {
    return knex(table).insert(car);
  }

  update(car) {
    return knex(table)
      .where("id", "=", car.id)
      .update(car);
  }

  deleteById(id) {
    return knex(table)
      .where("id", id)
      .del();
  }
}

module.exports = CarsDao;
