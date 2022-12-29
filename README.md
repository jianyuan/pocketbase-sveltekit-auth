# pocketbase-sveltekit-auth

This is a project that demonstrates how to integrate PocketBase with SvelteKit 1.0. The project includes login and registration pages, as well as examples of how to retrieve the current user. You can watch a video of the creation of this project on YouTube at [this link](https://youtu.be/AxPB3e-3yEM).

[![Watch the video](https://img.youtube.com/vi/AxPB3e-3yEM/0.jpg)](https://youtu.be/AxPB3e-3yEM)

## Developing

To get started with this project, you will need to have PocketBase installed and running on your system. You can find more information about installing and setting up PocketBase at the [PocketBase website](https://pocketbase.io/).

```
./pocketbase serve
```

Copy `.env.example` to `.env` and make changes as necessary.

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
