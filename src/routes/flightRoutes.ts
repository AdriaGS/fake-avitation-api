import { Router } from 'express';
import { getFlightHistory } from '../controllers/flightController';

const router = Router();

router.get('/flights', getFlightHistory);

export default router;
