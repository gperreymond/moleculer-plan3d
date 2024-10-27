const DbService = require('moleculer-db')
const SqlAdapter = require('moleculer-db-adapter-sequelize')
const Sequelize = require('sequelize')

module.exports = {
  name: 'projects',
  mixins: [DbService],
  adapter: new SqlAdapter('sqlite://:memory:'),
  model: {
    name: 'project',
    define: {
      title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      }
    },
    options: {
      // Options from http://docs.sequelizejs.com/manual/tutorial/models-definition.html
    }
  }
}