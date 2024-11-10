const DbService = require('moleculer-db')
const SqlAdapter = require('moleculer-db-adapter-sequelize')
const { DataTypes } = require('sequelize')

module.exports = {
  name: 'grounds',
  mixins: [DbService],
  adapter: new SqlAdapter('sqlite://data.sqlite'),
  settings: {
    idField: 'id'
  },
  model: {
    name: 'ground',
    define: {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      width: {
        type: DataTypes.INTEGER,
        defaultValue: 200,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      height: {
        type: DataTypes.INTEGER,
        defaultValue: 200,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      x: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      y: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      z: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      texture: {
        type: DataTypes.STRING,
        allowNull: true
      },
      color: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0xff0000,
        validate: {
          min: 0x000000,
          max: 0xffffff
        }
      }
    }
  }
}
