import fakeData from './database/fakeData.js';
import { connectDB, sequelize } from './database/mySQL.js';
import startSearch from './utils/userSearch.js';

sequelize.options.logging = false;

connectDB()
.then(() => fakeData())
.then(()=> startSearch());



