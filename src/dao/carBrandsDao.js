const knex = require("../../db/knex");
const table = "car_brands";

class CarBrandsDao {
  constructor() {}

  findAll(query) {
    return knex
      .select()
      .from(table)
      .paginate(query.limit, query.page);
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

module.exports = CarBrandsDao;
