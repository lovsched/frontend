<script lang="ts">
  import { Modal, Content, Trigger } from 'sv-popup';
  import CreateEventModal from './CreateEventModal.svelte';
  import { navigate } from 'svelte-navigator';

  let closeModal = false;

  export let reloadEvents: Function;
  export let archive: boolean;
</script>

<main>
  <div class="header">
    <h1>
      {#if archive}
        Arhivirani Dogodki
      {:else}
        Lovski Dogodki
      {/if}
    </h1>
    <div>
      {#if archive}
        <button on:click={() => navigate('/', { replace: true })}>Domov</button>
      {:else}
        <Modal small={true} close={closeModal} button={false}>
          <Content class="modal">
            <CreateEventModal
              closeModal={() => (closeModal = true)}
              reloadEvents={() => reloadEvents()}
            />
          </Content>
          <Trigger>
            <button>Nov dogodek</button>
          </Trigger>
        </Modal>
        <button on:click={() => navigate('/archive', { replace: true })}
          >Arhiv</button
        >
      {/if}
    </div>
  </div>
</main>
