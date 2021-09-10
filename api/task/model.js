const db = require('../../data/dbConfig')

const get = async () => {
  const tasks = await db('tasks as t')
      .leftJoin('projects as p', 'p.project_id', 't.project_id')
      .orderBy('t.project_id', 'asc')

  return tasks.map(task => {
    if (!task) {
      return []
    }
    return {
      task_id: task.task_id,
      task_description: task.task_description,
      task_notes: task.task_notes,
      task_completed: task.task_completed
        !== 0,
      project_name: task.project_name,
      project_id: task.project_id
    }
  })
}

const create = async task => {
  const created = task
  await db('tasks')
    .insert(task)
  return created
}

module.exports = {
  get,
  create
}
