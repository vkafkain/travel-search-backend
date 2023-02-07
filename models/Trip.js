import { sequelize } from '../database/mySQL.js';
import DataTypes from 'sequelize';
import City from './City.js';
import Flight from './Flight.js';
import Hotel from './Hotel.js';

const Trip = sequelize.define('trip', {
  name: DataTypes.STRING,
  type: DataTypes.ENUM('land trip', 'air trip'),
  duration: DataTypes.STRING,
});

Trip.hasMany(Flight, { as: 'flights' });
Flight.belongsTo(Trip, {
  as: 'trip',
});

Trip.belongsToMany(City, {
  through: 'trip_city',
  as: 'cities',
});
City.belongsToMany(Trip, {
  through: 'trip_city',
  as: 'trips',
});

Trip.belongsToMany(Hotel, {
  through: 'trip_hotel',
  as: 'hotels',
});
Hotel.belongsToMany(Trip, {
  through: 'trip_hotel',
  as: 'trips',
});


export default Trip;
