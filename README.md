# PWA avec Vite et React  <!-- omit in toc -->
#### [Voir le compte rendu](./COMPTE-RENDU.md) <!-- omit in toc -->

# Sommaire <!-- omit in toc -->
- [Installation](#installation)
- [Lancement](#lancement)
  - [Mode développement](#mode-développement)
  - [Mode préview](#mode-préview)
  - [Accés à la documentation JSDoc](#accés-à-la-documentation-jsdoc)
- [Architecture](#architecture)
- [Liste des plugins et dépendances](#liste-des-plugins-et-dépendances)
      - [Dépendances principales](#dépendances-principales)
      - [Dépendances de développement](#dépendances-de-développement)



## Description
L'entreprise SensorTech souhaite avoir une application Progressive Web Apps connectée à l'API REST réalisée précédemment.

La PWA doit être responsive, offline-ready et installable sur mobile

# Installation
1. Cloner le repository
```
git clone <url-du-repo>
cd pwa
```
2. Installer les dépendances
```
npm i
```
3. Modifier le fichier d'environnement `.env`

# Lancement
## Mode développement
````
npm run dev
````

## Mode préview 
````
npx serve dist
````

## Accés à la documentation JSDoc
```
start docs/index.html
```
# Architecture 

````
pwa/
├── dev-dist
├── dist/
│   ├── assets
│   ├── index.html
│   ├── manifest.webmanifest (fichier créé par vitePWA configurer dans le fichier vite.config.js)
│   └── workbox-XXXX.js
├── docs
├── nodes_modules
├── public/
│   └── images
├── src/
│   └── assets/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
├── .env
├── .gitignore
├── .eslint.config
├── index.html
├── jsdoc.json (fichier de config de JSDoc)
├── package.json
├── README.md
├── vite.config.js (fichier de configuration des plugins donc de VitePWA)
└── .gitignore
`````

# Liste des plugins et dépendances

#### Dépendances principales
- `@vitejs/plugin-vue`  
- `jquery`  
- `jsdoc`  
- `react`  
- `react-dom`  

#### Dépendances de développement
- `@eslint/js`  
- `@types/react`  
- `@types/react-dom`  
- `@vitejs/plugin-react`  
- `eslint`  
- `eslint-plugin-react-hooks`  
- `eslint-plugin-react-refresh`  
- `globals`  
- `vite`  
- `vite-plugin-pwa`  
- `vite-plugin-singlefile`
