import readline from 'readline-sync';
import { searchTrips } from '../controllers/search.controller.js';

const regex = /^[\p{L}]+$/u;

const userSearch = () => {
  const searchInput = readline.question(
    `\n Control + C for Exit\n Welcome to search engine! \n Enter city name:\n `
  );
  if (searchInput.length < 3) {
    console.log('Enter at least three letters to start the search!');
  }
  if (!searchInput.match(regex)) {
    console.log('Only letters allowed');
  }
  return searchInput;
};

const startSearch = async () => {
  const searchInput = userSearch();
  await searchTrips(searchInput);
  startSearch();
}

export default startSearch;
