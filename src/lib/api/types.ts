export interface Event {
  readonly id?: string;
  title: string;
  startTime: string;
  location: string;
  organizer?: Attendee | null;
  maxAttendees: number | string;
  attendees?: Attendee[];
}

export interface CreateEvent {
  readonly id?: string;
  title: string;
  startTime: string;
  location: string;
  organizer: string;
  maxAttendees: number | string;
  attendees?: string[];
}

export interface EditEvent {
  title: string;
  startTime: string;
  location: string;
  maxAttendees: number | string;
}

export interface Attendee {
  id?: string;
  name: string;
  number: string;
  email: string;
}

export interface MigrateEvent {
  readonly id?: string;
  title: string;
  startTime: string;
  location: string;
  organizer: string;
  maxAttendees: string;
  attendees?: string[];
}

export interface ApiEvent {
  readonly id: string;
  readonly attributes: {
    readonly title: string;
    readonly startTime: string;
    readonly location: string;
    readonly organizer?: {
      readonly data?: ApiAttendee | null;
    };
    readonly maxAttendees: string;
    readonly attendees?: {
      readonly data: ApiAttendee[];
    };
  };
}

export interface ApiAttendee {
  readonly id: string;
  readonly attributes: {
    readonly name: string;
    readonly number: string;
    readonly email: string;
  };
}
