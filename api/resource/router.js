const router = require('express')
  .Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
  Resource.getAll()
    .then(resources => res.json(resources))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Resource.create(req.body)
    .then(created => res.status(201)
      .json(created))
    .catch(next)
})

module.exports = router
