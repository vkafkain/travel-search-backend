import { sequelize } from '../database/mySQL.js';
import DataTypes from 'sequelize';

const Hotel = sequelize.define('hotel', {
  name: DataTypes.STRING,
  categories: DataTypes.STRING,
});

export default Hotel;
