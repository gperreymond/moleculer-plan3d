const DbService = require('moleculer-db')
const SqlAdapter = require('moleculer-db-adapter-sequelize')
const { DataTypes } = require('sequelize')

module.exports = {
  name: 'walls',
  mixins: [DbService],
  adapter: new SqlAdapter('sqlite://data.sqlite'),
  settings: {
    idField: 'id',
    fields: ['id', 'name', 'projectId']
  },
  model: {
    name: 'wall',
    define: {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }
  }
}
