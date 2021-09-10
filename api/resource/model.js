const db = require('../../data/dbConfig')

const get = async id => {
  const resources = id
    ? await db('resources')
      .where('resource_id', id)
    : await db('resources')

  return resources.map(resource => {
    if (!resource) {
      return []
    }
    return {
      resource_id: resource.resource_id,
      resource_name: resource.resource_name,
      resource_description: resource.resource_description
    }
  })
}

const create = async resource => {
  const created = resource
  await db('resources')
    .insert(resource)
  return created
}

module.exports = {
  get,
  create
}
