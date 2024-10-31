const DbService = require('moleculer-db')
const SqlAdapter = require('moleculer-db-adapter-sequelize')
const { DataTypes } = require('sequelize')
const { filter } = require('lodash')

module.exports = {
  name: 'projects',
  mixins: [DbService],
  adapter: new SqlAdapter('sqlite://data.sqlite'),
  settings: {
    idField: 'id',
    populates: {
      async walls (_, docs, __, ctx) {
        const items = await ctx.broker.call('walls.find')
        docs.map(doc => {
          doc.walls = filter(items, function (o) { return o.projectId === doc.id })
          return true
        })
        return true
      },
      async grounds (_, docs, __, ctx) {
        const items = await ctx.broker.call('grounds.find')
        docs.map(doc => {
          doc.grounds = filter(items, function (o) { return o.projectId === doc.id })
          return true
        })
        return true
      },
      async horizontalFences (_, docs, __, ctx) {
        const items = await ctx.broker.call('horizontalFences.find')
        docs.map(doc => {
          doc.horizontalFences = filter(items, function (o) { return o.projectId === doc.id })
          return true
        })
        return true
      }
    }
  },
  model: {
    name: 'project',
    define: {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    options: {}
  }
}
