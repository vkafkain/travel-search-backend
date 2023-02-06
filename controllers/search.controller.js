import Trip from "../models/Trip.js";

export const searchTrips = async () => {
  const trips =  await Trip.findAll({
    where:{}
  });
  const tripNames = trips.map(trip => trip.name);
  console.log(tripNames);
};