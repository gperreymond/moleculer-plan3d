const DbService = require('moleculer-db')
const SqlAdapter = require('moleculer-db-adapter-sequelize')
const { DataTypes } = require('sequelize')

module.exports = {
  name: 'horizontalFences',
  mixins: [DbService],
  adapter: new SqlAdapter('sqlite://data.sqlite'),
  settings: {
    idField: 'id'
  },
  model: {
    name: 'horizontalFence',
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
      numberOfPosts: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
        allowNull: false
      },
      numberOfRails: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
        allowNull: false
      },
      postWidth: {
        type: DataTypes.INTEGER,
        defaultValue: 10,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      postHeight: {
        type: DataTypes.INTEGER,
        defaultValue: 100,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      postThickness: {
        type: DataTypes.INTEGER,
        defaultValue: 20,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      railWidth: {
        type: DataTypes.INTEGER,
        defaultValue: 200,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      railHeight: {
        type: DataTypes.INTEGER,
        defaultValue: 20,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      railThickness: {
        type: DataTypes.INTEGER,
        defaultValue: 5,
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
      flip: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      postColor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0xff0000,
        validate: {
          min: 0x000000,
          max: 0xffffff
        }
      },
      railColor: {
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
