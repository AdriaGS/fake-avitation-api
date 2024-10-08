import express from 'express';
import flightRoutes from './routes/flightRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/flights', flightRoutes);

export default app;
