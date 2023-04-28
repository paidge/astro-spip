# Astro Starter Kit pour interroger une API
## Pré-requis
- Avoir installé SPIP sur un serveur avec le plugin collectionjson et renseigné quelques articles
- Avoir installé Node.js

## Tester le dépôt
```
git clone https://github.com/paidge/astro-spip.git
cd astro-spip
npm install
# Modifier l'URL de l'API
nano src/script/fetch.js
# Lance le serveur de dev sur http://localhost:3000/
- npm run dev
```


## 🚀 Structure du projet

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── article
|   |   |   └── [id].astro
│   │   └── index.astro
│   └── script/
│       └── fetch.js
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
