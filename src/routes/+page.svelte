<script lang="ts">
  import type { AuthModel } from 'pocketbase'
  import { getContext } from 'svelte'

  const user = getContext<AuthModel | undefined>('user')
</script>

{#if user}
  <p>Logged in as {user.email}</p>
{:else}
  <p>Not logged in</p>
{/if}

<p>
  Visit
  <a href="https://github.com/jianyuan/pocketbase-sveltekit-auth">
    our GitHub repository
  </a>
  to read the documentation.
</p>
