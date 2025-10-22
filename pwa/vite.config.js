import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

/**
 * Configuration principale de Vite pour le projet React + PWA.
 *
 * Inclut :
 * - React via @vitejs/plugin-react
 * - PWA avec VitePWA (service worker, cache runtime, manifest)
 *
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  base: './',
  plugins: [
    react(),
    VitePWA({
      /**
       * Type d'enregistrement du service worker.
       * @type {string}
       */
      registerType: 'autoUpdate',

      /**
       * Configuration Workbox pour le caching runtime.
       * @type {Object}
       */
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
        runtimeCaching: [
          {
            /**
             * Pattern des URLs à mettre en cache
             * @type {RegExp}
             */
            urlPattern: /^https:\/\/iot\.olasserre\.dev-campus\.fr\/api\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },

      /**
       * Manifest de l'application PWA
       */
      manifest: {
        name: 'PWA Router',
        short_name: 'PWA Router',
        description: 'Mon application PWA',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: './index.html',
        icons: [
          { src: 'images/t.png', sizes: '192x192', type: 'image/png' },
          { src: 'images/t.png', sizes: '512x512', type: 'image/png' },
        ],
      },

      /**
       * Options de développement pour la PWA
       */
      devOptions: {
        enabled: true,
      },
    }),
  ],
})
