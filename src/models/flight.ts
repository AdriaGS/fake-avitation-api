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
    scheduled_time: string;
    actual_time: string;
    delay: number;
  };
  arrival: {
    airport: string;
    timezone: string;
    scheduled_time: string;
    actual_time: string;
    delay: number;
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

export interface Pagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}
