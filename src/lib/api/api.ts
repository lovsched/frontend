import axios from 'axios';
import { parseEvent } from './parser';
import type { ApiEvent, Event } from './types';

axios.defaults.baseURL = 'http://localhost:1337/api';

async function getEvents(): Promise<Event[]> {
  const response = await axios.get<{ data: ApiEvent[] }>('/events');

  const events: Event[] = [];

  response.data.data.forEach((apiEvent: ApiEvent) => {
    events.push(parseEvent(apiEvent));
  });

  return events;
}

export { getEvents };
