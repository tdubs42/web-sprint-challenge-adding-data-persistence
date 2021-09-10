exports.up = function (knex) {
  return knex.schema
    .createTable('projects', table => {
      table.increments('project_id')
      table.string('project_name')
        .notNullable()
      table.string('project_description')
      table.boolean('project_completed')
        .defaultTo(false)
    })
    .createTable('resources', table => {
      table.increments('resource_id')
      table.string('resource_name')
        .notNullable()
        .unique()
      table.string('resource_description')
    })
    .createTable('tasks', table => {
      table.increments('task_id')
      table.string('task_description')
        .notNullable()
      table.string('task_notes')
      table.boolean('task_completed')
        .defaultTo(false)
      table.integer('project_id')
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .notNullable()
    })
    .createTable('project_resources', table => {
      table.integer('resource_id')
        .unsigned()
        .references('resource_id')
        .inTable('resources')
      table.integer('project_id')
        .unsigned()
        .references('project_id')
        .inTable('projects')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
}
