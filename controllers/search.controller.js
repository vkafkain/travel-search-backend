import { Op } from "sequelize";
import City from "../models/City.js";
import Trip from "../models/Trip.js";

export const searchTrips = async (searchInput) => {
  try {
    const trips =  await Trip.findAll({
      where:{
        
      },
      include: [
        {

        }
      ]
    });

    const tripNames = await trips.map(trip => trip.name);
    console.log(tripNames);
  } catch (error) {
    console.error(error);
  }
};