import axios from 'axios';
import { parseEvent } from './parser';
import type {
  ApiAttendee,
  ApiEvent,
  Attendee,
  Event,
  MigrateEvent,
} from './types';

axios.defaults.baseURL = 'http://localhost:1337/api';

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

async function createEvent(event: Event) {
  const response = await axios.post('/events', {
    data: event,
  });

  console.log(response);
}

async function archiveEvent(event: Event) {
  let migrated: MigrateEvent = {
    id: event.id,
    title: event.title,
    startTime: event.startTime,
    location: event.location,
    organizerName: event.organizerName,
    organizerEmail: event.organizerEmail,
    organizerPhone: event.organizerPhone,
    maxAttendees: event.maxAttendees,
  };

  const eventAttendeeIDs: string[] = [];

  event.attendees.forEach((attendee) => {
    eventAttendeeIDs.push(attendee.id);
  });

  migrated.attendees = eventAttendeeIDs;

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

async function createAttendee(attendee: Attendee) {
  const response = await axios.post<{ data: ApiAttendee }>('/attendees', {
    data: attendee,
  });

  console.log(response);

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

  console.log(response);
}

export {
  getEvents,
  getArchivedEvents,
  createEvent,
  archiveEvent,
  unarchiveEvent,
  createAttendee,
  signupForEvent,
};
