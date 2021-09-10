const router = require('express')
  .Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
  Project.get()
    .then(projects => res.json(projects))
    .catch(next)
})

router.get('/:project_id', (req, res, next) => {
  const {project_id} = req.params

  Project.get(project_id)
    .then(project => res.json(project))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Project.create(req.body)
    .then(created => res.status(201)
      .json(created))
    .catch(next)
})

module.exports = router
