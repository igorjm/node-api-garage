let generator = require("../../src/utils/generator");
let faker = require("faker");
faker.locale = "pt_BR";

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("persons")
    .del()
    .then(function() {
      let persons = [];

      let i = 0;
      while (i < 100) {
        persons.push({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          cpf: generator.cpf(),
          birthdate: faker.date.past()
        });
        i++;
      }

      console.log("persons", persons);

      // Inserts seed entries
      return knex("persons").insert(persons);
    });
};
