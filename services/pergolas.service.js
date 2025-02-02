const DbService = require('moleculer-db')
const SqlAdapter = require('moleculer-db-adapter-sequelize')
const { DataTypes } = require('sequelize')

module.exports = {
  name: 'pergolas',
  mixins: [DbService],
  adapter: new SqlAdapter('sqlite://data.sqlite'),
  settings: {
    idField: 'id'
  },
  model: {
    name: 'pergola',
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
      pillarWidth: {
        type: DataTypes.INTEGER,
        defaultValue: 20,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      pillarHeight: {
        type: DataTypes.INTEGER,
        defaultValue: 180,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      pillarThickness: {
        type: DataTypes.INTEGER,
        defaultValue: 20,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      pillarColor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0xff0000,
        validate: {
          min: 0x000000,
          max: 0xffffff
        }
      },
      roofWidth: {
        type: DataTypes.INTEGER,
        defaultValue: 100,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      roofDepth: {
        type: DataTypes.INTEGER,
        defaultValue: 100,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      roofThickness: {
        type: DataTypes.INTEGER,
        defaultValue: 20,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      roofColor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0xff00ff,
        validate: {
          min: 0x000000,
          max: 0xffffff
        }
      }
    }
  }
}
