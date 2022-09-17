<script lang="ts">
  import { getEvents } from './lib/api/api';
  import type { Event } from './lib/api/types';
  import EventCard from './lib/EventCard.svelte';
  import Header from './lib/Header.svelte';
  

  let events: Event[] = [{
  title : "Naslov",
   startTime :  "25.9.2022",
   location :"Gozd",
   organizerName :  "Boris",
   organizerPhone :  "069432653",
   organizerEmail :  "blabla@gmail.com",
   maxAttendees : 6,
   attendeeCount : 2,
  },{
  title : "Naslov2",
   startTime :  "25.9.2022",
   location :"Gozd",
   organizerName :  "Boris",
   organizerPhone :  "069432653",
   organizerEmail :  "blabla@gmail.com",
   maxAttendees : 6,
   attendeeCount : 2,
  },{
  title : "Naslov3",
   startTime :  "25.9.2022",
   location :"Gozd",
   organizerName :  "Boris",
   organizerPhone :  "069432653",
   organizerEmail :  "blabla@gmail.com",
   maxAttendees : 6,
   attendeeCount : 2,
  }];

  const loadEvents = async () => {
    events = await getEvents();
  };

  loadEvents();
</script>

<main>
  <Header />
  <div class="container">
  {#each events as event}
      <EventCard {event} />
    {/each}
  </div>
</main>
