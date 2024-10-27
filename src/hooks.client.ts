import { getUserContext } from '$lib/contexts/user'
import { pb } from '$lib/pocketbase'

pb.authStore.loadFromCookie(document.cookie)
pb.authStore.onChange(() => {
  getUserContext().set(pb.authStore.model)
  document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
}, true)
