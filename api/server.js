// noinspection JSUnresolvedFunction,JSUnresolvedVariable,JSUnusedLocalSymbols

const express = require('express')
const helmet = require('helmet')
const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)

/* eslint-disable */
server.use((err, req, res, next) => {
  res.status(err.status
    || 500)
    .json({
      fromTheDev: 'mistakes were made',
      message: err.message,
      stack: err.stack,
    })
})
/* eslint-enable */

server.get('/', (req, res) => {
  res.send(`<h1>More info is needed to continue</h1>`)
})

module.exports = server
