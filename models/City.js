import { sequelize } from '../database/mySQL.js';
import DataTypes from 'sequelize';

const City = sequelize.define('city', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default City;
