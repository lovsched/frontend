<script lang="ts">
  import { unarchiveEvent } from './api/api';
  import type { Event } from './api/types';
  import SpacerL from './spacers/SpacerL.svelte';
  import SpacerM from './spacers/SpacerM.svelte';

  export let event: Event;
  export let reloadEvents: Function;
</script>

<main class="event-container">
  <div class="event-card">
    <p class="event-title">{event.title}</p>
    <SpacerL />
    <p>{event.startTime}</p>
    <p>Lokacija: {event.location}</p>
    <SpacerM />
    <p>Organizator: {event.organizer.name ?? 'Ni podatka'}</p>
    <p>
      Telefon: <a href="tel:${event.organizer.number ?? 'Ni podatka'}"
        >{event.organizer.number ?? 'Ni podatka'}</a
      >
    </p>
    {#if event.organizer.email ?? 'Ni podatka'}
      <p>
        Email: <a href="mailto:${event.organizer.email ?? 'Ni podatka'}"
          >{event.organizer.email ?? 'Ni podatka'}</a
        >
      </p>
    {/if}
    <SpacerL />
    <div class="ec-actions">
      <button
        class="button-red"
        on:click={async () => {
          await unarchiveEvent(event);
          reloadEvents();
        }}>Odarhiviraj</button
      >
    </div>
  </div>
</main>
