import { sequelize } from '../database/mySQL.js';
import DataTypes from 'sequelize';
import City from './City.js';
import Flight from './Flight.js';
import Hotel from './Hotel.js';

const Trip = sequelize.define('trip', {
  name: DataTypes.STRING,
  type: DataTypes.ENUM('land trip', 'air trip'),
  duration: DataTypes.TIME,
});

Trip.hasMany(Flight, { as: 'flights' });
Flight.belongsTo(Trip, {
  foreignKey: 'tripId',
  as: 'trip',
});

Trip.belongsToMany(City, {
  through: 'trip_city',
  as: 'city',
  foreignKey: 'tripId',
});
City.belongsToMany(Trip, {
  through: 'trip_city',
  as: 'trip',
  foreignKey: 'cityId',
});

Trip.belongsToMany(Hotel, {
  through: 'trip_hotel',
  as: 'hotel',
  foreignKey: 'tripId',
});
Hotel.belongsToMany(Trip, {
  through: 'trip_hotel',
  as: 'trip',
  foreignKey: 'cityId',
});


export default Trip;
