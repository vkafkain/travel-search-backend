import readline from 'readline-sync';

const regex = /^[\p{L}]+$/u;

const userSearch = () => {
  const searchInput = readline.question(
    `Welcome to search engine! \n Enter your destination:  `
  );
  if (searchInput.length < 3) {
    console.log('Enter at least three letters to start the search!');
  }
  if (!searchInput.match(regex)) {
    console.log('Only letters allowed');
  }
  return searchInput;
};

export default userSearch;
