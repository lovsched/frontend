<script lang="ts">
  import CreateEventModal from './CreateEventModal.svelte'
  function handleAddNew() {
    console.log("Add new");
  }
</script>

<main>
  <div class="header">
    <h1>Lovski Dogodki</h1>
    <button on:click={() => handleAddNew()}>Nov dogodek</button>
  </div>
  <CreateEventModal/>
</main>
