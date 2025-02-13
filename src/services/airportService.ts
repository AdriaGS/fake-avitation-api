import { faker } from '@faker-js/faker';
import { Airport, AirportResponse } from '../models/airport';

export const getFakeAirports = ({
  limit = 4,
}: {
  limit?: number;
}): AirportResponse => {
  const airports: Airport[] = [];

  for (let i = 0; i < limit; i++) {
    const countryCode = faker.location.countryCode('alpha-2');

    airports.push({
      airport_name: `${faker.location.city()} International Airport`,
      iata_code: faker.string.alpha({ length: 3, casing: 'upper' }),
      icao_code: faker.string.alpha({ length: 4, casing: 'upper' }),
      latitude: faker.location.toString(),
      longitude: faker.location.toString(),
      geoname_id: faker.string.numeric(7),
      timezone: faker.location.timeZone(),
      gmt: faker.helpers.arrayElement([
        '-12',
        '-11',
        '-10',
        '-9',
        '-8',
        '-7',
        '-6',
        '-5',
        '-4',
        '-3',
        '-2',
        '-1',
        '0',
        '+1',
        '+2',
        '+3',
        '+4',
        '+5',
        '+6',
        '+7',
        '+8',
        '+9',
        '+10',
        '+11',
        '+12',
      ]),
      phone_number: faker.phone.number(),
      country_name: faker.location.country(),
      country_iso2: countryCode,
      country_iso3: faker.location.countryCode('alpha-3'),
      city_iata_code: faker.string.alpha({ length: 3, casing: 'upper' }),
      city_name: faker.location.city(),
      website: faker.internet.url(),
    });
  }

  return {
    pagination: {
      limit,
      offset: 0,
      count: limit,
      total: 10000, // Static total for demo
    },
    data: airports,
  };
};
