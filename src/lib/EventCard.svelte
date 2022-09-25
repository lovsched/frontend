<script lang="ts">
  import { archiveEvent } from './api/api';
  import type { Event } from './api/types';
  import SpacerL from './spacers/SpacerL.svelte';
  import SpacerM from './spacers/SpacerM.svelte';
  import { Modal, Content, Trigger } from 'sv-popup';
  import CreateAttendeeModal from './CreateAttendeeModal.svelte';

  let closeModal: boolean = false;

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
    <Modal small={true} close={closeModal} button={false}>
      <Content>
        <CreateAttendeeModal
          {event}
          closeModal={() => (closeModal = true)}
          reloadEvents={() => reloadEvents()}
        />
      </Content>
      <div class="ec-actions">
        <Trigger>
          <button
            >Prijavi me: {event.attendees
              ? event.attendees.length
              : 0}/{event.maxAttendees}</button
          >
        </Trigger>
        <button
          class="button-red"
          on:click={async () => {
            await archiveEvent(event);
            reloadEvents();
          }}>Arhiviraj</button
        >
      </div>
    </Modal>
  </div>
</main>
