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
        const walls = await ctx.broker.call('walls.find', { excludeFields: 'projectId' })
        docs.map(doc => {
          doc.walls = filter(walls, function (o) { return o.id === doc.id })
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
