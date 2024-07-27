import express from 'express';
import dotenv from 'dotenv';

import tripPlannerRoutes from './routes/trip-planner.routes.js'

const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT ?? 3000;

app.use('/trip-planner', tripPlannerRoutes);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});