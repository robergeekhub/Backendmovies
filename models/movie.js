'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Order, { through: models.OrderMovie });
      
    }
  };
  movie.init({
    title: DataTypes.STRING,
    poster_path: DataTypes.STRING,
    overview: DataTypes.TEXT,
    release_date: DataTypes.DATE,
    vote_average: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};