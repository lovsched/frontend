import type { ApiEvent, Event } from './types';

function parseDate(date): string {
  const parsed: Date = new Date(date);

  const day = parsed.getDate();
  const month = parsed.getMonth();
  const year = parsed.getFullYear();

  const hour = ('0' + parsed.getHours()).slice(-2);
  const minutes = ('0' + parsed.getMinutes()).slice(-2);

  const formatted: string = `${day}.${month}.${year} ob ${hour}:${minutes}`;

  return formatted;
}

export function parseEvent(apiEvent: ApiEvent): Event {
  return {
    title: apiEvent.attributes.title,
    startTime: parseDate(apiEvent.attributes.startTime),
    location: apiEvent.attributes.location,
    organizerName: apiEvent.attributes.organizerName,
    organizerPhone: apiEvent.attributes.organizerPhone,
    organizerEmail: apiEvent.attributes.organizerEmail,
    maxAttendees: apiEvent.attributes.maxAttendees,
    attendeeCount: apiEvent.attributes.attendeeCount,
  };
}
