import type { ApiAttendee, Attendee, ApiEvent, Event } from './types';

export function parseEvent(apiEvent: ApiEvent): Event {
  function parseAttendees(attendees: ApiAttendee[]) {
    const parsed: Attendee[] = [];

    attendees.forEach((attendee: ApiAttendee) => {
      const temp: Attendee = {
        id: attendee.id,
        name: attendee.attributes.name,
        number: attendee.attributes.number,
        email: attendee.attributes.email,
      };

      parsed.push(temp);
    });

    return parsed;
  }

  return {
    id: apiEvent.id,
    title: apiEvent.attributes.title,
    startTime: apiEvent.attributes.startTime,
    location: apiEvent.attributes.location,
    organizerName: apiEvent.attributes.organizerName,
    organizerPhone: apiEvent.attributes.organizerPhone,
    organizerEmail: apiEvent.attributes.organizerEmail,
    maxAttendees: apiEvent.attributes.maxAttendees,
    attendees: parseAttendees(apiEvent.attributes.attendees.data),
  };
}
