exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  knex("car_brands")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("car_brands").insert([
        { id: 1, name: "Ford" },
        { id: 2, name: "Chevrolet" },
        { id: 3, name: "Renault" }
      ]);
    });

  // Deletes ALL existing entries
  return knex("car_models")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("car_models").insert([
        {
          id: 1,
          name: "Fiesta",
          year_model: "2018",
          year_manufactured: "2018",
          id_car_brand: 1
        },
        {
          id: 2,
          name: "Ecosport",
          year_model: "2018",
          year_manufactured: "2018",
          id_car_brand: 1
        },
        {
          id: 3,
          name: "Fusion",
          year_model: "2018",
          year_manufactured: "2018",
          id_car_brand: 1
        },

        {
          id: 4,
          name: "Onix",
          year_model: "2018",
          year_manufactured: "2018",
          id_car_brand: 2
        },
        {
          id: 5,
          name: "Prisma",
          year_model: "2018",
          year_manufactured: "2018",
          id_car_brand: 2
        },
        {
          id: 6,
          name: "Cruze",
          year_model: "2018",
          year_manufactured: "2018",
          id_car_brand: 2
        },

        {
          id: 7,
          name: "Sandero",
          year_model: "2018",
          year_manufactured: "2018",
          id_car_brand: 3
        },
        {
          id: 8,
          name: "Duster",
          year_model: "2018",
          year_manufactured: "2018",
          id_car_brand: 3
        },
        {
          id: 9,
          name: "Fluence",
          year_model: "2018",
          year_manufactured: "2018",
          id_car_brand: 3
        }
      ]);
    });
};
