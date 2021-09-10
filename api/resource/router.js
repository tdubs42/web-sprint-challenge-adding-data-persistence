const router = require('express')
  .Router()
const Resource = require('./model')
const Project = require('./model')

router.get('/', (req, res, next) => {
  Resource.get()
    .then(resources => res.json(resources))
    .catch(next)
})

router.get('/:resource_id', (req, res, next) => {
  const {resource_id} = req.params

  Project.get(resource_id)
    .then(resource => res.json(resource))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Resource.create(req.body)
    .then(created => res.status(201)
      .json(created))
    .catch(next)
})

module.exports = router
