import fakeData from './database/fakeData.js';
import { connectDB, sequelize } from './database/mySQL.js';
import readline from 'readline-sync';

const regex = /^[\p{L}]+$/u
sequelize.options.logging = false;

connectDB().then(() => {
  fakeData()
}).then(async () => {
  const searchInput = readline.question(`Welcome to seach engine! \n Enter your destination:  `);
  if(searchInput.length < 3){
    console.log('Enter at least three letters to start the search!');
  }
  if(!searchInput.match(regex)) {
    console.log('Only letters allowed')
  }
  

  // console.log(searchInput);
}) 

//buscar ciudad por el input introducido




/* 

import trips from './database/testDB.js'; */

/* console.log('Welcome to the travel finder!');

const searchInput = readline.question('Enter your destination:  ');

if (searchInput.length < 3) {
  console.error('Enter at least 3 letters for search destination');
}

const filterTrips = trips.filter((trip) => {
  return trip.cities.some((city) =>
    city.toLowerCase().includes(searchInput.toLowerCase())
  );
});

filterTrips.forEach((result) => {
  console.log(`Trip Name: ${result.name}`);
  console.log(`Type of trip: ${result.type}`);
  console.log(`Duration: ${result.duration} days`);
  console.log(`Cities: ${result.cities.join(', ')}`);
  if (result.type === 'land') {
    console.log('Hotels: ');
    result.hotels.forEach((hotel) => {
      console.log(` - ${hotel.name} (${hotel.category})`);
    });
  } else {
    console.log('Flights: ');
    result.flights.forEach((flight) => {
      console.log(` - ${flight.departureCity} (${flight.departureTime})`);
    });
  }
  console.log('\n');
});
 */
