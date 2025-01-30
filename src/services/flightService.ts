import { faker } from '@faker-js/faker';
import { FlightData, FlightHistory } from '../models/flight';

export const getFakeFlightHistory = ({
  flight_iata,
}: {
  flight_iata: string;
}): FlightHistory => {
  const flightData: FlightData[] = [];
  for (let i = 0; i < 10; i++) {
    flightData.push({
      flight_date: faker.date.past().toISOString().split('T')[0],
      flight_status: faker.helpers.arrayElement(['landed', 'cancelled']),
      departure: {
        airport: faker.location.city(),
        timezone: faker.location.timeZone(),
        scheduled: faker.date.past().toISOString(),
        estimated: faker.date.past().toISOString(),
        actual: faker.date.past().toISOString(),
        delay: faker.number.int(100) > 50 ? faker.number.int(120) : 0,
        terminal: faker.string.numeric(1),
        gate: faker.string.numeric(3),
      },
      arrival: {
        airport: faker.location.city(),
        timezone: faker.location.timeZone(),
        scheduled: faker.date.past().toISOString(),
        estimated: faker.date.past().toISOString(),
        actual: faker.date.past().toISOString(),
        delay: faker.number.int(100) > 50 ? faker.number.int(120) : 0,
        terminal: faker.string.numeric(1),
        gate: faker.string.numeric(3),
      },
      airline: {
        name: faker.company.name(),
        iata: faker.string.alphanumeric(2).toUpperCase(),
        icao: faker.string.alphanumeric(3).toUpperCase(),
      },
      flight: {
        number: faker.number.int(1000).toString(),
        iata: flight_iata,
        icao: faker.string.alphanumeric(4).toUpperCase(),
      },
      aircraft: {
        registration: faker.vehicle.vrm(),
        iata: faker.string.alphanumeric(3).toUpperCase(),
        icao: faker.string.alphanumeric(4).toUpperCase(),
      },
    });
  }
  return {
    pagination: {
      limit: 100,
      offset: 0,
      count: 100,
      total: 1669022,
    },
    data: flightData,
  };
};
