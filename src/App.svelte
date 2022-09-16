<script lang="ts">
  import { getEvents } from './lib/api/api';
  import type { Event } from './lib/api/types';
  import EventCard from './lib/EventCard.svelte';
  import Header from './lib/Header.svelte';

  let events: Event[] = [];

  const loadEvents = async () => {
    events = await getEvents();
  };

  loadEvents();
</script>

<main>
  <Header />
  {#each events as event}
    <EventCard {event} />
  {/each}
</main>
