import { Request, Response } from 'express';
import { getFakeFlightHistory } from '../services/flightService';
import { checkNotNull } from '../utils/extensions';

export const getFlightHistory = (req: Request, res: Response) => {
  const flight_iata = checkNotNull(req.query.flight_iata).toString();
  const flightHistory = getFakeFlightHistory({ flight_iata: flight_iata });
  res.json(flightHistory);
};
