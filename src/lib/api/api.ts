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

async function getArchivedEvents(): Promise<Event[]> {
  const response = await axios.get<{ data: ApiEvent[] }>('/archives');

  const events: Event[] = [];

  response.data.data.forEach((apiEvent: ApiEvent) => {
    events.push(parseEvent(apiEvent));
  });

  return events;
}

async function createEvent(event: Event) {
  const response = await axios.post('/events', {
    data: event,
  });

  console.log(response);
}

async function archiveEvent(event: Event) {
  const deleteExisting = await axios.delete(`/events/${event.id}`);
  const response = await axios.post('/archives', {
    data: event,
  });

  console.log(deleteExisting);
  console.log(response);
}

async function unarchiveEvent(event: Event) {
  const deleteExisting = await axios.delete(`/archives/${event.id}`);
  const response = await axios.post('/events', {
    data: event,
  });

  console.log(deleteExisting);
  console.log(response);
}

export {
  getEvents,
  getArchivedEvents,
  createEvent,
  archiveEvent,
  unarchiveEvent,
};
