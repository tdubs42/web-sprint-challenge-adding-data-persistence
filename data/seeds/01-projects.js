
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_id: 1,
          project_name: 'Portfolio',
          project_description: 'Get on it woman',
          project_completed: false
        },
        {
          project_id: 2,
          project_name: 'Project Mage',
          project_description: 'Needs a massive updating',
          project_completed: false
        },
      ]);
    });
};
