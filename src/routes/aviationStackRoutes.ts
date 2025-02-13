import { Router } from 'express';
import {
  getFlightData,
  getNearestAirports,
} from '../controllers/flightController';

const router = Router();

router.get('/flights', getFlightData);
router.get('/airports', getNearestAirports);

export default router;
