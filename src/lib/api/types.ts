export interface Event {
  readonly title: string;
  readonly startTime: string;
  readonly location: string;
  readonly organizerName: string;
  readonly organizerPhone: string;
  readonly organizerEmail: string | null;
  readonly maxAttendees: number;
  readonly attendeeCount: number;
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
