import { Pagination } from './common';

export interface AirportResponse {
  pagination: Pagination;
  data: Airport[];
}

export interface Airport {
  airport_name: string;
  iata_code: string;
  icao_code: string;
  latitude: string;
  longitude: string;
  geoname_id: string;
  timezone: string;
  gmt: string;
  phone_number: string;
  country_name: string;
  country_iso2: string;
  country_iso3: string;
  city_iata_code: string;
  city_name: string;
  website: string;
}
