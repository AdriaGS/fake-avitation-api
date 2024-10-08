import { faker } from '@faker-js/faker';
import { FlightHistory } from '../models/flight';

export const getFakeFlightHistory = (): FlightHistory[] => {
  const flightHistory: FlightHistory[] = [];
  for (let i = 0; i < 10; i++) {
    flightHistory.push({
      flight_date: faker.date.past().toISOString().split('T')[0],
      flight_status: faker.helpers.arrayElement(['landed', 'cancelled']),
      departure: {
        airport: faker.location.city(),
        timezone: faker.location.timeZone(),
        scheduled_time: faker.date.past().toISOString(),
        actual_time: faker.date.past().toISOString(),
        delay: faker.number.int(120),
      },
      arrival: {
        airport: faker.location.city(),
        timezone: faker.location.timeZone(),
        scheduled_time: faker.date.past().toISOString(),
        actual_time: faker.date.past().toISOString(),
        delay: faker.number.int(120),
      },
      airline: {
        name: faker.company.name(),
        iata: faker.string.alphanumeric(2).toUpperCase(),
        icao: faker.string.alphanumeric(3).toUpperCase(),
      },
      flight: {
        number: faker.number.int(1000).toString(),
        iata: faker.string.alphanumeric(5).toUpperCase(),
        icao: faker.string.alphanumeric(4).toUpperCase(),
      },
      aircraft: {
        registration: faker.vehicle.vrm(),
        iata: faker.string.alphanumeric(3).toUpperCase(),
        icao: faker.string.alphanumeric(4).toUpperCase(),
      },
    });
  }
  return flightHistory;
};
