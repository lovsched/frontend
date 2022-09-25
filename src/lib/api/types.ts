export interface Event {
  readonly id?: string;
  title: string;
  startTime: string;
  location: string;
  organizerName: string;
  organizerPhone: string;
  organizerEmail: string | null;
  maxAttendees: number;
  attendees?: Attendee[];
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
  organizerName: string;
  organizerPhone: string;
  organizerEmail: string | null;
  maxAttendees: number;
  attendees?: string[];
}

export interface ApiEvent {
  readonly id: string;
  readonly attributes: {
    readonly title: string;
    readonly startTime: string;
    readonly location: string;
    readonly organizerName: string;
    readonly organizerPhone: string;
    readonly organizerEmail: string;
    readonly maxAttendees: number;
    readonly attendees: {
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
