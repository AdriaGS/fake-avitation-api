import { Request, Response } from 'express';
import { getFakeFlightHistory } from '../services/flightService';

export const getFlightHistory = (req: Request, res: Response) => {
  const flightHistory = getFakeFlightHistory();
  res.json(flightHistory);
};
