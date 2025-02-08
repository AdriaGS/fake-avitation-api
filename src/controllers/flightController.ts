import { Request, Response } from 'express';
import { getFakeFlightHistory } from '../services/flightService';
import { getFakeAirports } from '../services/airportService';
import { checkNotNull } from '../utils/extensions';

export const getFlightHistory = (req: Request, res: Response) => {
  const flight_iata = checkNotNull(req.query.flight_iata).toString();
  const flightHistory = getFakeFlightHistory({ flight_iata: flight_iata });
  res.json(flightHistory);
};

export const getNearestAirports = (req: Request, res: Response) => {
  const lat = Number(checkNotNull(req.query.lat));
  const lng = Number(checkNotNull(req.query.lng));
  const limit = Number(checkNotNull(req.query.limit));
  const airports = getFakeAirports({ lat: lat, lng: lng, limit: limit });
  res.json(airports);
};
