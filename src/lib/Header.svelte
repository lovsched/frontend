<script lang="ts">
  function handleAddNew() {
    console.log("Add new");
  }
</script>

<main>
  <div class="header">
    <h1>Lovski Dogodki</h1>
    <button on:click={() => handleAddNew()}>Nov dogodek</button>
  </div>
</main>
