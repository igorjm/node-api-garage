exports.up = function(knex, Promise) {
  knex.schema.hasTable("persons").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("persons", function(t) {
        t.increments("id").primary();
        t.string("first_name", 100);
        t.string("last_name", 100);
        t.string("cpf", 11);
        t.date("birthdate");
      });
    }
  });

  knex.schema.hasTable("car_brands").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("car_brands", function(t) {
        t.increments("id").primary();
        t.string("name", 100);
      });
    }
  });

  knex.schema.hasTable("car_models").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("car_models", function(t) {
        t.increments("id").primary();
        t.string("name", 100);
        t.integer("year_model");
        t.integer("year_manufactured");
        t.integer("id_car_brand")
          .references("id")
          .inTable("car_brands");
      });
    }
  });

  return knex.schema.hasTable("user_cars").then(function(exists) {
    if (!exists) {
      return knex.schema.createTable("user_cars", function(t) {
        t.increments("id").primary();
        t.integer("id_person")
          .references("id")
          .inTable("persons");
        t.integer("id_car_model")
          .references("id")
          .inTable("car_models");
      });
    }
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("persons");
  knex.schema.dropTable("car_brands");
  knex.schema.dropTable("car_models");
  return knex.schema.dropTable("user_cars");
};
