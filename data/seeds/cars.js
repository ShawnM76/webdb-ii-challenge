exports.seed = function(knex) {
  return knex('cars')
    .truncate()
    .then(function() {
      return knex('cars').insert([
        {
          VIN: '1a2b3v4d5e6f7g8h9',
          Make: 'Nissan',
          Module: 'Rogue',
          Mileage: 1000,
          Transmission: 'Automatic',
          Title: 'Clean',
        },
        {
          VIN: '2B3C4D5E6F7G8H9I1',
          Make: 'Nissan',
          Model: 'Rogue XL',
          Mileage: 10000,
          Transmission: 'Automatic',
          Title: 'Clean',
        },
      ]);
    });
};
