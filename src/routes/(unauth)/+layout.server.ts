import { redirect } from '@sveltejs/kit'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals }) => {
  if (locals.user) {
    // If the user is logged in, redirect to the home page
    throw redirect(303, '/')
  }
}