import { Router } from 'express'

import { generateQuery, createTripPlan } from '../services/trip.services.js';

const router = Router();

router.post('/', async (req, res) => {
    const destination = req.body.destination ?? '';
    const duration = req.body.duration ?? '';
    const numOfTravellers = req.body.numOfTravellers ?? '';
    const modeOfTransport = req.body.modeOfTransport ?? '';

    const query = generateQuery(destination, duration, numOfTravellers, modeOfTransport);
    const plan = await createTripPlan(query);

    res.send(plan)
});

export default router