import { sequelize } from './mySQL.js';
import Trip from '../models/Trip.js';
import Flight from '../models/Flight.js';
import City from '../models/City.js';
import Hotel from '../models/Hotel.js';

export default function fakeData() {
  const city = [
    { name: 'Berlin', country: 'Germany' },
    { name: 'Paris', country: 'France' },
    { name: 'London', country: 'UK' },
    { name: 'Rome', country: 'Italy' },
    { name: 'Madrid', country: 'Spain' },
  ];

  const hotel = [
    { name: 'The Ritz Carlton', categories: '5 stars' },
    { name: 'Hilton Paris Opera', categories: '4 stars' },
    { name: 'The Savoy', categories: '5 stars' },
    { name: 'Grand Hotel Parco dei Principi', categories: '5 stars' },
    { name: 'Hotel NH Collection Madrid Eurobuilding', categories: '4 stars' },
  ];

  const flight = [
    { departure_city: 'Berlin', departure_time: '2022-10-01 10:00:00' },
    { departure_city: 'Paris', departure_time: '2022-10-02 09:00:00' },
    { departure_city: 'London', departure_time: '2022-10-03 08:00:00' },
    { departure_city: 'Rome', departure_time: '2022-10-04 07:00:00' },
    { departure_city: 'Madrid', departure_time: '2022-10-05 06:00:00' },
  ];

  const trip = [
    { name: 'European Adventure', type: 'land trip', duration: '10:00:00' },
    { name: 'City Break', type: 'air trip', duration: '05:00:00' },
    { name: 'Luxury Getaway', type: 'air trip', duration: '07:00:00' },
  ];

  sequelize.sync({ force: true }).then(async () => {
    await City.bulkCreate(city);
    await Hotel.bulkCreate(hotel);
    await Flight.bulkCreate(flight);
    await Trip.bulkCreate(trip);
  });
}
