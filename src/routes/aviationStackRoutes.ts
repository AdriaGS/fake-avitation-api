import { Router } from 'express';
import {
  getFlightHistory,
  getNearestAirports,
} from '../controllers/flightController';

const router = Router();

router.get('/flights', getFlightHistory);
router.get('/airports', getNearestAirports);

export default router;
