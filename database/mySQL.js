import { Sequelize } from 'sequelize';
import mysql from 'mysql2/promise'
import * as dotenv from 'dotenv'
dotenv.config()


const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);

const connectDB = async () => {
    try{
        const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        });
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`),
        await sequelize.sync({ force: true });
        console.log('Connection to mySQL-DB has been established successfully')
    }catch(error) {
        console.error('Unable to connect to the database:', error);
    }
};



export {sequelize, connectDB}

