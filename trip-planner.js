import colors from 'colors';
import openai from './config/open-ai.js';

export const generateQuery = (destination, duration, numOfTravelers, modeOfTransport) => {
    return `I'd like your help to create a trip itinerary. 
    Destination is ${destination}. 
    Duration is ${duration} days. 
    Number of travelers is ${numOfTravelers}. 
    Mode of transportation is ${modeOfTransport}. 
    Can you create a day-by-day itinerary that includes must-see attractions, 
    recommended restaurants, and any side trips a person could take there?`
};

export async function createTripPlan(query) {
    console.log(query)
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: query
                }
            ],
        });

        return completion.choices[0].message.content;
    } catch (e) {
        console.log(colors.bold.red('Error creating a trip plan!', e));
    }
}