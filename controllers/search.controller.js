import City from '../models/City.js';
import Trip from '../models/Trip.js';
import Hotel from '../models/Hotel.js';
import Flight from '../models/Flight.js';

const formatTrip = (trip) => {
  const { name, type, duration } = trip;
  const cityNames = trip.cities.map((city) => city.name).join(', ');
  let result = `${name}; ${type}; ${duration}; ${cityNames}; `;
  if (type === 'land trip') {
    result += trip.hotels.map((hotel) => `${hotel.name}, ${hotel.category}`).join('; ');
  }
  if (type === 'air trip') {
    result += trip.flights.map((flight) => `${flight.departure_city}, ${flight.departure_time}`).join('; ');
  }
  return result;
};

export const searchTrips = async (searchInput) => {
  try {
    const trips = await Trip.findAll({
      include: [
        {
          model: City,
          through: 'trip_city',
          as: 'cities',
        },
        {
          model: Hotel,
          through: 'trip_hotel',
          as: 'hotels',
          required: false,
        },
        {
          model: Flight,
          as: 'flights',
          required: false,
        },
      ],
    });

    const filteredTrips = trips.filter((trip) => {
      const cityNames = trip.cities.map((city) => city.name).join(', ');
      return cityNames.toLowerCase().includes(searchInput.toLowerCase().slice(0, 3));
    });

    if (filteredTrips.length > 0) {
      filteredTrips.forEach((trip) => {
        console.log(formatTrip(trip));
      });
    } else {
      console.log('The letters entered do not match any city');
    }
  } catch (error) {
    console.error(error);
  }
};