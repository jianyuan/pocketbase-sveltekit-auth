<script lang="ts">
  import '../app.postcss'

  import { setContext, type Snippet } from 'svelte'
  import { applyAction, enhance } from '$app/forms'
  import { pb } from '$lib/pocketbase'
  import type { PageData } from './$types'

  interface Props {
    data: PageData
    children?: Snippet
  }

  let { data, children }: Props = $props()

  // Add the user to the context so we can access it in other components
  setContext('user', data.user)
</script>

<div class="bg-neutral text-neutral-content">
  <div class="max-w-xl mx-auto navbar">
    <div class="navbar-start">
      <a href="/" class="btn btn-ghost text-xl">PB + SK</a>
    </div>
    <div class="navbar-end">
      <ul class="menu menu-horizontal">
        {#if data.user}
          <li><a href="/">{data.user.email}</a></li>
          <li>
            <form
              method="POST"
              action="/logout"
              use:enhance={() => {
                return async ({ result }) => {
                  pb.authStore.clear()
                  await applyAction(result)
                }
              }}
            >
              <button>Log out</button>
            </form>
          </li>
        {:else}
          <li><a href="/login">Log in</a></li>
          <li><a href="/register">Register</a></li>
        {/if}
      </ul>
    </div>
  </div>
</div>

<div class="max-w-xl mx-auto py-8 px-4">
  {@render children?.()}
</div>
