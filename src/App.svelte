<script lang="ts">
  import { getEvents } from './lib/api/api';
  import type { Event } from './lib/api/types';
  import EventCard from './lib/EventCard.svelte';
  import Header from './lib/Header.svelte';
  import Notifications from 'svelte-notifications';

  let events: Event[] = [];

  const loadEvents = async () => {
    events = await getEvents();
  };

  loadEvents();
</script>

<main>
  <Notifications>
    <Header reloadEvents={() => loadEvents()} />
    <div class="container">
      {#each events as event}
        <EventCard {event} />
      {/each}
    </div>
  </Notifications>
</main>
