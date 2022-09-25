import type { ApiEvent, Event } from './types';

export function parseEvent(apiEvent: ApiEvent): Event {
  return {
    title: apiEvent.attributes.title,
    startTime: apiEvent.attributes.startTime,
    location: apiEvent.attributes.location,
    organizerName: apiEvent.attributes.organizerName,
    organizerPhone: apiEvent.attributes.organizerPhone,
    organizerEmail: apiEvent.attributes.organizerEmail,
    maxAttendees: apiEvent.attributes.maxAttendees,
    attendeeCount: apiEvent.attributes.attendeeCount,
  };
}
