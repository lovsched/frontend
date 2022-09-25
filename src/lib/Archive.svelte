<script lang="ts">
  import { getArchivedEvents } from './api/api';
  import type { Event } from './api/types';
  import ArchiveCard from './ArchiveCard.svelte';
  import Header from './Header.svelte';
  import Notifications from 'svelte-notifications';

  let archivedEvents: Event[] = [];

  const loadArchivedEvents = async () => {
    archivedEvents = await getArchivedEvents();
  };

  loadArchivedEvents();
</script>

<main>
  <Notifications>
    <Header archive={true} reloadEvents={() => loadArchivedEvents()} />
    <div class="container">
      {#each archivedEvents as event}
        <ArchiveCard {event} reloadEvents={() => loadArchivedEvents()} />
      {/each}
    </div>
  </Notifications>
</main>
