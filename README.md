# VARS

How to implement common patterns in each of these popular frameworks:

- [Vue](https://vuejs.org) (+ [Nuxt](https://nuxtjs.org))
- [Angular](https://angular.io)
- [React](https://reactjs.org) (+ [Next](https://nextjs.org))
- [Svelte](https://svelte.dev) (+ [Sapper](https://sapper.svelte.dev))

Nuxt/Next/Sapper are included, as they solve things like routing and SSR out of the box.

## Apps/features

### Hacker News

- List + detail view
- Dynamic routing + code-splitting
- SSR
- Global CSS

## Status

| Feature     | Vue | Angular | React | Svelte |
| :---------- | :-: | :-----: | :---: | :----: |
| Hacker News |  ✔  |    ✔    |   ✔   |   ✔    |
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
