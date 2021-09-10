const db = require('../../data/dbConfig')

const getAll = async () => {
  return await db('tasks')
}

const create = async task => {
  return await db('tasks')
    .insert(task)
    .then(([id]) => {
      return db('tasks')
        .where('task_id', id)
        .first()
    })
}

module.exports = {
  getAll,
  create
}
