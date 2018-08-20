const knex = require("../../db/knex");
const table = "persons";

class PersonsDao {
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

  insert(person) {
    return knex(table).insert(person);
  }

  update(person) {
    return knex(table)
      .where("id", "=", person.id)
      .update(person);
  }

  deleteById(id) {
    return knex(table)
      .where("id", id)
      .del();
  }
}

module.exports = PersonsDao;
