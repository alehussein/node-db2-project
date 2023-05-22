// STRETCH

exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('cars').truncate()
    await knex('cars').insert([
      {vin: '12121398123918214', make: 'buick', model: 'encore', mileage: '450000', title: 'alejandro', transmission: 'automatic'},
      {vin: '12121398132423423', make: 'buick', model: 'encore', mileage: '480000', title: 'Ian', transmission: 'automatic'},
      {vin: '12121398132423223', make: 'buick', model: 'encore', mileage: '480000', title: 'Mama', transmission: 'automatic'},
     
     
    ]);
  };