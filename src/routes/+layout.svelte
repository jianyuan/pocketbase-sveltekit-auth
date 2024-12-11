<script lang="ts">
  import '../app.postcss'

  import { browser } from '$app/environment'
  import { applyAction, enhance } from '$app/forms'
  import { setUserContext } from '$lib/contexts/user'
  import { pb } from '$lib/pocketbase'
  import { onDestroy, type Snippet } from 'svelte'
  import { writable } from 'svelte/store'
  import type { PageData } from './$types'

  interface Props {
    data: PageData
    children?: Snippet
  }

  let { data, children }: Props = $props()

  // Initialize user store
  const user = writable(data.user)
  setUserContext(user)

  if (browser) {
    // Load user from cookie (client-side only)
    pb.authStore.loadFromCookie(document.cookie)

    // Update user store when auth store changes
    const unsubscribe = pb.authStore.onChange(() => {
      user.set(pb.authStore.record)
      document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
    }, true)
    onDestroy(unsubscribe)
  }
</script>

<div class="bg-neutral text-neutral-content">
  <div class="max-w-xl mx-auto navbar">
    <div class="navbar-start">
      <a href="/" class="btn btn-ghost text-xl">PB + SK</a>
    </div>
    <div class="navbar-end">
      <ul class="menu menu-horizontal">
        {#if $user}
          <li><a href="/">{$user.email}</a></li>
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
