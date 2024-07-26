import readlineSync from 'readline-sync';
import colors from 'colors';

import { generateQuery, createTripPlan } from './trip-planner.js';

async function main() {
    console.log(colors.bold.green('Welcome to the ChatGPT itinerary planner!'));
    console.log(colors.bold.green('Enter your trip details and generate your trip plan.'))

    const destination = readlineSync.question(colors.yellow('Where are you travelling? (e.g. London): '));
    const duration = readlineSync.question(colors.yellow('How many days will you be travelling? (e.g. 4): '));
    const numOfTravelers = readlineSync.question(colors.yellow('How many people will be travelling? (e.g. 2): '));
    const modeOfTransport = readlineSync.question(colors.yellow('With which mode of transport are you travelling with? (e.g. plane, train, car): '));

    console.log(colors.bold.green('Trip itinerary loading...'))

    const query = generateQuery(destination, duration, numOfTravelers, modeOfTransport);
    const plan = await createTripPlan(query);

    console.log(colors.green(plan));
}

main();

