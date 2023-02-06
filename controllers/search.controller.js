import Trip from "../models/Trip.js";

export const searchTrips = async () => {
  const trips =  await Trip.findAll({
  });
  const tripNames = trips.map(trip => trip.name);
  console.log(tripNames);
};