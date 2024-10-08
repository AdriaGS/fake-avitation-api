import { Router } from 'express';
import { getFlightHistory } from '../controllers/flightController';

const router = Router();

router.get('/flight-history', getFlightHistory);

export default router;
