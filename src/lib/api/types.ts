export interface Event {
  title: string;
  startTime: string;
  location: string;
  organizerName: string;
  organizerPhone: string;
  organizerEmail: string | null;
  maxAttendees: number;
  attendeeCount?: number;
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
    readonly attendeeCount: number | null;
  };
}
