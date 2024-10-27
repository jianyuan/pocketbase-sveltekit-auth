import type { AuthModel } from 'pocketbase'
import { getContext, setContext } from 'svelte'
import type { Writable } from 'svelte/store'

const userKey = Symbol('user')

export function setUserContext(user: Writable<AuthModel>) {
  setContext(userKey, user)
}

export function getUserContext() {
  return getContext<Writable<AuthModel>>(userKey)
}
