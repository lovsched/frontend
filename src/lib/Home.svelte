<script lang="ts">
  import { getEvents } from './api/api';
  import type { Event } from './api/types';
  import EventCard from './EventCard.svelte';
  import Header from './Header.svelte';

  let events: Event[] = [{
  title: "test",
  startTime: "test",
  location: "test",
  organizerName: "test",
  organizerPhone: "test",
  organizerEmail: "test",
  maxAttendees: 5,
  attendees: [{
  name: "test",
  number: "test",
  email: "test",
}],
},
{
  title: "test",
  startTime: "test",
  location: "test",
  organizerName: "test",
  organizerPhone: "test",
  organizerEmail: "test",
  maxAttendees: 5,
  attendees: [{
  name: "test",
  number: "test",
  email: "test",
}],
},
];

  const loadEvents = async () => {
    events = await getEvents();
  };

  loadEvents();
</script>

<main>
  <Header archive={false} reloadEvents={() => loadEvents()} />
  <div class="container">
    {#each events as event}
      <EventCard {event} reloadEvents={() => loadEvents()} />
    {/each}
  </div>
</main>
