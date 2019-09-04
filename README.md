# VARS

How to implement common patterns in each of these popular frameworks:

- [Vue](https://vuejs.org) (+ [Nuxt](https://nuxtjs.org)) → [vue.webpro.now.sh](https://vue.webpro.now.sh)
- [Angular](https://angular.io) → [angular.webpro.now.sh](https://angular.webpro.now.sh)
- [React](https://reactjs.org) (+ [Next](https://nextjs.org)) → [react.webpro.now.sh](https://react.webpro.now.sh)
- [Svelte](https://svelte.dev) (+ [Sapper](https://sapper.svelte.dev))

Nuxt/Next/Sapper are included, as they solve things like routing and SSR out of the box.

## Apps/features

### Hacker News

- PWA (Lighthouse: 💯)
- List + detail view
- Dynamic routing + code-splitting
- SSR
- Global CSS

### CRUD

- Based on [7GUIs → CRUD](https://eugenkiss.github.io/7guis/tasks/#crud)
- Manage state with CRUD (create, read, update, delete) operations
- The [Svelte CRUD example](https://svelte.dev/examples#7guis-crud)

## Status

| Feature     | Vue | Angular | React | Svelte |
| :---------- | :-: | :-----: | :---: | :----: |
| Hacker News |  ✔  |    ✔    |   ✔   |   ✔    |
| CRUD        |  x  |    x    |   ✔   |   ✔    |
| Form        |  x  |    x    |   x   |   x    |
| ...?        |  x  |    x    |   x   |   x    |
| ...?        |  x  |    x    |   x   |   x    |

Also see [issues](https://github.com/webpro/vars/issues) and [PRs](https://github.com/webpro/vars/pulls).

## Installation, etc.

Each framework has its own folder, and the same `npm` commands.

```
git clone https://github.com/webpro/vars.git
cd vars
cd [angular|react|svelte|vue]
npm install
npm run dev     # development
npm run build   # create production build
npm start       # run production build
```

## Inspiration/links

- [7GUIs](https://eugenkiss.github.io/7guis/)
- [HNPWA](https://hnpwa.com)
