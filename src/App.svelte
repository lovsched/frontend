<script lang="ts">
  import { Router, Route } from 'svelte-navigator';
  import Home from './lib/Home.svelte';
  import Archive from './lib/Archive.svelte';
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/archive" component={Archive} />
</Router>
