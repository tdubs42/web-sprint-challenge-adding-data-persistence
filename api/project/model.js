const db = require('../../data/dbConfig')

const get = async id => {
  const projects = id ? await db('projects').where('project_id', id) : await db('projects')

  return projects.map(project => {
    if (!project) {
      return []
    }
    return {
      project_id: project.project_id,
      project_name: project.project_name,
      project_description: project.project_description,
      project_completed: project.project_completed
        !== 0
    }
  })
}

const create = async project => {
  const created = project
  await db('projects')
    .insert(project)
  return created
}

module.exports = {
  get,
  create
}
