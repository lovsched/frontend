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
    <p>Organizator: {event.organizerName}</p>
    <p>
      Telefon: <a href="tel:${event.organizerPhone}">{event.organizerPhone}</a>
    </p>
    {#if event.organizerEmail}
      <p>
        Email: <a href="mailto:${event.organizerEmail}"
          >{event.organizerEmail}</a
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
