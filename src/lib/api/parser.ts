import type { ApiAttendee, Attendee, ApiEvent, Event } from './types';

export function parseAttendee(apiAttendee: ApiAttendee | null): Attendee {
  if (apiAttendee === null) return null;

  return {
    id: apiAttendee.id,
    name: apiAttendee.attributes.name,
    number: apiAttendee.attributes.number,
    email: apiAttendee.attributes.email,
  };
}

export function parseEvent(apiEvent: ApiEvent): Event {
  function parseAttendees(attendees: ApiAttendee[] | null) {
    if (attendees === null) return null;

    const parsed: Attendee[] = [];

    attendees.forEach((attendee: ApiAttendee) => {
      const temp: Attendee = parseAttendee(attendee);

      parsed.push(temp);
    });

    return parsed;
  }

  return {
    id: apiEvent.id,
    title: apiEvent.attributes.title,
    startTime: apiEvent.attributes.startTime,
    location: apiEvent.attributes.location,
    organizer: parseAttendee(apiEvent.attributes.organizer.data),
    maxAttendees: parseInt(apiEvent.attributes.maxAttendees),
    attendees: parseAttendees(apiEvent.attributes.attendees.data),
  };
}
