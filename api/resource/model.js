const db = require('../../data/dbConfig')

const getAll = async () => {
  return await db('resources')
}

const create = async resource => {
  return await db('resources')
    .insert(resource)
    .then(([id]) => {
      return db('resources')
        .where('resource_id', id)
        .first()
    })
}

module.exports = {
  getAll,
  create
}
