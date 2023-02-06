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
