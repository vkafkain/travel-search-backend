import { sequelize } from '../database/mySQL.js';
import DataTypes from 'sequelize';

const Flight = sequelize.define('flight', {
  departure_city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departure_time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

export default Flight;
