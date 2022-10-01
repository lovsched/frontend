import axios from 'axios';
import { parseAttendee, parseEvent } from './parser';
import type {
  ApiAttendee,
  ApiEvent,
  Attendee,
  Event,
  MigrateEvent,
  CreateEvent,
} from './types';

axios.defaults.baseURL =
  import.meta.env.VITE_API_URL || 'http://localhost:1337/api';

async function getEvents(): Promise<Event[]> {
  const response = await axios.get<{ data: ApiEvent[] }>('/events?populate=*');

  const events: Event[] = [];

  response.data.data.forEach((apiEvent: ApiEvent) => {
    events.push(parseEvent(apiEvent));
  });

  return events;
}

async function getArchivedEvents(): Promise<Event[]> {
  const response = await axios.get<{ data: ApiEvent[] }>(
    '/archives?populate=*',
  );

  const events: Event[] = [];

  response.data.data.forEach((apiEvent: ApiEvent) => {
    events.push(parseEvent(apiEvent));
  });

  return events;
}

async function getAttendees(): Promise<Attendee[]> {
  const response = await axios.get<{ data: ApiAttendee[] }>('/attendees');

  const attendees: Attendee[] = [];

  response.data.data.forEach((apiAttendee: ApiAttendee) => {
    attendees.push(parseAttendee(apiAttendee));
  });

  return attendees;
}

async function createEvent(event: CreateEvent) {
  const response = await axios.post('/events', {
    data: event,
  });
}

async function archiveEvent(event: Event) {
  let migrated: MigrateEvent = {
    id: event.id,
    title: event.title,
    startTime: event.startTime,
    location: event.location,
    organizer: event.organizer.id,
    maxAttendees: event.maxAttendees.toString(),
  };

  const eventAttendeeIDs: string[] = [];

  event.attendees.forEach((attendee) => {
    eventAttendeeIDs.push(attendee.id);
  });

  migrated.attendees = eventAttendeeIDs;

  const deleteExisting = await axios.delete(`/events/${event.id}`);
  const response = await axios.post('/archives', {
    data: migrated,
  });
}

async function unarchiveEvent(event: Event) {
  const deleteExisting = await axios.delete(`/archives/${event.id}`);
  const response = await axios.post('/events', {
    data: event,
  });
}

async function createAttendee(attendee: Attendee) {
  const response = await axios.post<{ data: ApiAttendee }>('/attendees', {
    data: attendee,
  });

  return response.data.data;
}

async function signupForEvent(event: Event, attendeeID: string) {
  const eventAttendeeIDs: string[] = [];

  event.attendees.forEach((attendee) => {
    eventAttendeeIDs.push(attendee.id);
  });

  eventAttendeeIDs.push(attendeeID);

  const response = await axios.put(`/events/${event.id}`, {
    data: { attendees: eventAttendeeIDs },
  });
}

export {
  getEvents,
  getArchivedEvents,
  createEvent,
  archiveEvent,
  unarchiveEvent,
  createAttendee,
  signupForEvent,
  getAttendees,
};
