export interface FlightHistory {
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
