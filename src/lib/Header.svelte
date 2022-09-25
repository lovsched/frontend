<script lang="ts">
  import { Modal, Content, Trigger } from 'sv-popup';
  import CreateEventModal from './CreateEventModal.svelte';

  let closeModal = false;

  export let reloadEvents: Function;
</script>

<main>
  <div class="header">
    <h1>Lovski Dogodki</h1>
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
  </div>
</main>
