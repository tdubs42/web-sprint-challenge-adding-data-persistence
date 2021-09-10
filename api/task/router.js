const router = require('express')
  .Router()
const Task = require('./model')

router.get('/', (req, res, next) => {
  Task.get()
    .then(tasks => res.json(tasks))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Task.create(req.body)
    .then(created => res.status(201)
      .json(created))
    .catch(next)
})

module.exports = router
