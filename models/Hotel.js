import { sequelize } from '../database/mySQL.js';
import DataTypes from 'sequelize';

const Hotel = sequelize.define('hotel', {
  name: DataTypes.STRING,
  category: DataTypes.STRING,
});

export default Hotel;
