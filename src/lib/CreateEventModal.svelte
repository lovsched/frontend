<script lang="ts">
  import { onMount } from 'svelte';
  import SpacerL from './spacers/SpacerL.svelte';
  import type { Attendee, CreateEvent } from './api/types';
  import { createEvent, getAttendees } from './api/api';

  let title: string = '';
  let location: string = '';
  let maxAttendees: number = null;
  let startTime: string = '';

  let attendeeList: Attendee[] = [];
  let organizer: Attendee;

  export let closeModal: Function;
  export let reloadEvents: Function;

  function isNumber(value) {
    return !isNaN(value);
  }

  function handleInput(e) {
    let oldValue = maxAttendees;
    let newValue = e.target.value;

    if (isNumber(newValue) && newValue.length < 17) {
      maxAttendees = newValue;
    } else {
      maxAttendees = oldValue;
    }
  }

  const onConfirm = async () => {
    const event: CreateEvent = {
      title,
      location,
      organizer: organizer.id,
      maxAttendees,
      startTime,
    };

    try {
      await createEvent(event);
      closeModal();
      reloadEvents();
    } catch (e) {
      console.error(e);
      alert('Prišlo je do napake. Preverite vsa polja.');
    }
  };

  onMount(async () => {
    const resp: Attendee[] = await getAttendees();

    attendeeList = resp;
  });
</script>

<div class="form">
  <div class="input-container">
    <input
      id="event-name"
      bind:value={title}
      class="input"
      type="text"
      placeholder=" "
    />
    <div class="cut" />
    <label for="event-name" class="placeholder">Naslov Dogodka</label>
  </div>

  <div class="input-container ic2">
    <input
      id="location"
      bind:value={location}
      class="input"
      type="text"
      placeholder=" "
    />
    <div class="cut cut-medium" />
    <label for="location" class="placeholder">Lokacija</label>
  </div>

  <div class="input-container ic2">
    <select id="organizer" class="input" bind:value={organizer} placeholder=" ">
      {#each attendeeList as attendee}
        <option value={attendee}>
          {attendee.name}
        </option>
      {/each}
    </select>
    <div class="cut cut-mail" />
    <label for="email" class="placeholder">Organizator</label>
  </div>

  <div class="input-container ic2">
    <input
      id="attendees"
      bind:value={maxAttendees}
      on:input|preventDefault={handleInput}
      class="input"
      type="number"
      min={0}
      placeholder=" "
    />
    <div class="cut cut-large" />
    <label for="attendees" class="placeholder">Zaželjeno Št. oseb</label>
  </div>

  <div class="input-container ic2">
    <input
      id="date"
      bind:value={startTime}
      class="input"
      type="text"
      placeholder=" "
    />
    <div class="cut cut-mail" />
    <label for="date" class="placeholder">Kdaj</label>
  </div>
  <SpacerL />
  <div class="actions">
    <button class="button-green" on:click={() => onConfirm()}>Potrdi</button>
    <button class="button-red" on:click={() => closeModal()}>Zapri</button>
  </div>
</div>

<style>
  .form {
    background-color: #303030;
    border-radius: 20px;
    box-sizing: border-box;
    height: auto;
    padding: 20px;
    width: auto;
    border: solid 2px white;
  }

  .input-container {
    height: 50px;
    position: relative;
    width: 100%;
  }

  .ic2 {
    margin-top: 20px;
  }

  .input {
    background-color: #1a1a1a;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
  }

  .cut {
    background-color: #303030;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 105px;
  }

  .cut-medium {
    width: 65px;
  }

  .cut-mail {
    width: 50px;
  }

  .cut-large {
    width: 120px;
  }

  .input:focus ~ .cut,
  .input:not(:placeholder-shown) ~ .cut {
    transform: translateY(8px);
  }

  .placeholder {
    color: white;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
  }

  .input:focus ~ .placeholder,
  .input:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }

  .input:not(:placeholder-shown) ~ .placeholder {
    color: white;
  }

  .input:focus ~ .placeholder {
    color: #dc2f55;
  }

  .actions {
    display: flex;
    justify-content: space-evenly;
  }
</style>
