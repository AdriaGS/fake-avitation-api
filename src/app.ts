import express from 'express';
import aviationStackRoutes from './routes/aviationStackRoutes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/v1', aviationStackRoutes);

export default app;
