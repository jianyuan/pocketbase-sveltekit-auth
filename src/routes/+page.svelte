<script lang="ts">
  import { getUserContext } from '$lib/contexts/user'

  const user = getUserContext()
</script>

{#if $user}
  <p>Logged in as {$user.email}</p>
{:else}
  <p>Not logged in</p>
{/if}

<p>
  Visit
  <a
    href="https://github.com/jianyuan/pocketbase-sveltekit-auth"
    class="link link-primary"
  >
    our GitHub repository
  </a>
  to read the documentation.
</p>
