<script lang="ts">
  import { applyAction, enhance } from '$app/forms'
  import { pb } from '$lib/pocketbase'
</script>

<form
  method="POST"
  class="card"
  use:enhance={() => {
    return async ({ result }) => {
      pb.authStore.loadFromCookie(document.cookie)
      await applyAction(result)
    }
  }}
>
  <h1 class="text-2xl mb-8">Log in</h1>
  <div class="flex flex-col gap-2 [&_input]:w-full">
    <input
      type="email"
      name="email"
      placeholder="Email"
      class="input input-bordered"
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      class="input input-bordered"
    />
    <button class="btn btn-primary">Log in</button>
  </div>
</form>
