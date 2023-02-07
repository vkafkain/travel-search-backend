import { sequelize } from './mySQL.js';
import Trip from '../models/Trip.js';
import Flight from '../models/Flight.js';
import City from '../models/City.js';
import Hotel from '../models/Hotel.js';

export default async function fakeData() {
  const city = [
    { name: 'Berlin', country: 'Germany' },
    { name: 'Paris', country: 'France' },
    { name: 'London', country: 'UK' },
    { name: 'Rome', country: 'Italy' },
    { name: 'Madrid', country: 'Spain' },
    { name: 'Barcelona', country: 'Spain' },
    { name: 'القاهرة', country: 'مصر' },
    { name: '上海', country: '中国' },
  ];
 

  const hotel = [
    { name: 'The Ritz Carlton', category: '5 stars' },
    { name: 'Hilton Paris Opera', category: '4 stars' },
    { name: 'The Savoy', category: '5 stars' },
    { name: 'Grand Hotel Parco dei Principi', category: '5 stars' },
    { name: 'Hotel NH Collection Madrid Eurobuilding', category: '4 stars' },
  ];

  const flight = [
    { departure_city: 'Berlin', departure_time: '2022-10-01 10:00:00' },
    { departure_city: 'Paris', departure_time: '2022-10-02 09:00:00' },
    { departure_city: 'London', departure_time: '2022-10-03 08:00:00' },
    { departure_city: 'Rome', departure_time: '2022-10-04 07:00:00' },
    { departure_city: 'Madrid', departure_time: '2022-10-05 06:00:00' },
    { departure_city: 'Barcelona', departure_time: '2022-11-05 06:30:00' },
    { departure_city: '上海', departure_time: '2022-11-05 06:30:00' },
    { departure_city: 'القاهرة', departure_time: '2022-11-05 06:30:00' },
  ];

  const trip = [
    { name: 'European Adventure', type: 'land trip', duration: '5 days' },
    { name: 'City Break', type: 'air trip', duration: '11 days' },
    { name: 'Luxury Getaway', type: 'air trip', duration: '8 days' },
    { name: 'Chinese Adventure', type: 'land trip', duration: '8 days' },
  ];

  await sequelize.sync({ force: true })
    const cities = await City.bulkCreate(city);
    const hotels = await Hotel.bulkCreate(hotel);
    const flights = await Flight.bulkCreate(flight);
    const trips = await Trip.bulkCreate(trip);

    for (const [index, flight] of flights.entries()){
      await flight.setTrip(trips[index % trips.length]);
    }

    for (let i = 0; i < trips.length; i++) {
      await trips[i].setFlights([flights[2 * i], flights[2 * i + 1]]);
      await trips[i].setCities(cities);
      await trips[i].setHotels(hotels);
    }
  };

