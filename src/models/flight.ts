import { Pagination } from './common';

export interface FlightHistory {
  pagination: Pagination;
  data: FlightData[];
}

export interface FlightData {
  flight_date: string;
  flight_status: string;
  departure: {
    airport: string;
    timezone: string;
    scheduled: string;
    estimated: string;
    actual: string;
    delay: number;
    terminal: string;
    gate: string;
  };
  arrival: {
    airport: string;
    timezone: string;
    scheduled: string;
    estimated: string;
    actual: string;
    delay: number;
    terminal: string;
    gate: string;
  };
  airline: {
    name: string;
    iata: string;
    icao: string;
  };
  flight: {
    number: string;
    iata: string;
    icao: string;
  };
  aircraft: {
    registration: string;
    iata: string;
    icao: string;
  };
}
