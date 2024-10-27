import { pb } from '$lib/pocketbase'
import { setContext } from 'svelte'

pb.authStore.loadFromCookie(document.cookie)
pb.authStore.onChange(() => {
  setContext('user', pb.authStore.model)
  document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
}, true)
