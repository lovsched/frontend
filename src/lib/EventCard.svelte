<script lang="ts">
  import { archiveEvent } from './api/api';
  import type { Event } from './api/types';
  import SpacerL from './spacers/SpacerL.svelte';
  import SpacerM from './spacers/SpacerM.svelte';
  import { Modal, Content, Trigger } from 'sv-popup';
  import CreateAttendeeModal from './CreateAttendeeModal.svelte';
  import EditEventModal from './EditEventModal.svelte';

  let closeModal: boolean = false;
  let closeEditModal: boolean = false;
  let closeAttendeesModal: boolean = false;

  export let event: Event;
  export let reloadEvents: Function;
</script>

<main class="event-container">
  <div class="event-card">
    <div class="event-header">
      <p class="event-title">{event.title}</p>
      <Modal small={true} close={closeEditModal} button={false}>
        <Content class="modal">
          <EditEventModal
            {event}
            closeModal={() => (closeEditModal = true)}
            reloadEvents={() => reloadEvents()}
          />
        </Content>
        <div>
          <Trigger><button>Uredi</button></Trigger>
        </div>
      </Modal>
    </div>
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
      <Modal small={true} close={closeModal} button={false}>
        <Content>
          <CreateAttendeeModal
            {event}
            closeModal={() => (closeModal = true)}
            reloadEvents={() => reloadEvents()}
          />
        </Content>
        <Trigger>
          <button disabled={event.attendees.length === event.maxAttendees}
            >Prijavi me: {event.attendees
              ? event.attendees.length
              : 0}/{event.maxAttendees}</button
          >
        </Trigger>
      </Modal>
      <Modal small={true} close={closeAttendeesModal} button={false}>
        <Content>
          <div class="attendees-container">
            {#each event.attendees as attendee}
              <p>{attendee.name}</p>
              <ul>
                <li><a href="tel:{attendee.number}">{attendee.number}</a></li>
                <li><a href="tel:{attendee.email}">{attendee.email}</a></li>
              </ul>
            {/each}
            <button class="button-green">Pošlji mail</button>
          </div>
        </Content>
        <Trigger>
          <button class="button-green">Prijavljeni</button>
        </Trigger>
      </Modal>
      <button
        class="button-red"
        on:click={async () => {
          await archiveEvent(event);
          reloadEvents();
        }}>Arhiviraj</button
      >
    </div>
  </div>
</main>

<style>
  .attendees-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #303030;
    height: auto;
    padding: 1rem;
    width: auto;
    border: solid 2px white;
    border-radius: 10px;
  }

  .attendees-container > p {
    font-size: 1.5rem;
  }
</style>
