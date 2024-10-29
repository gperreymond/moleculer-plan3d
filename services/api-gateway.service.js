const WebService = require('moleculer-web')

const { moleculer: { port } } = require('../application.config')

module.exports = {
  name: 'apiGateway',
  mixins: [WebService],
  settings: {
    port,
    cors: {
      origin: '*',
      methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: [
        'content-type'
      ],
      exposedHeaders: [],
      credentials: false,
      maxAge: 3600
    },
    routes: [{
      path: '/api/v1',
      aliases: {
        'GET projects': 'projects.find',
        'GET projects/:id': 'projects.get',
        'POST projects': 'projects.create',
        'PUT projects/:id': 'projects.update',
        'DELETE projects/:id': 'projects.remove',
        'GET walls': 'walls.find',
        'GET walls/:id': 'walls.get',
        'POST walls': 'walls.create',
        'PUT walls/:id': 'walls.update',
        'DELETE walls/:id': 'walls.remove',
        'GET horizontalFences': 'horizontalFences.find',
        'GET horizontalFences/:id': 'horizontalFences.get',
        'POST horizontalFences': 'horizontalFences.create',
        'PUT horizontalFences/:id': 'horizontalFences.update',
        'DELETE horizontalFences/:id': 'horizontalFences.remove'
      }
    }],
    mappingPolicy: 'restrict',
    bodyParsers: {
      json: true
    }
  }
}
