import {StrictMode, useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })

/**
 * Initialise le service worker et gère les notifications
 */
function initServiceWorkerAndNotifications() {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js").then(
            /**
             * Callback exécuté si le service worker est enregistré
             * @param {ServiceWorkerRegistration} registration
             */
            function onServiceWorkerRegistered(registration) {
                console.log("Service worker enregistré :", registration);

                // Gestion des notifications
                if (!("Notification" in window)) {
                    console.error("Notifications non supportées");
                } else if (Notification.permission === "granted") {
                    new Notification("Bonjour le monde !");
                } else if (Notification.permission !== "denied") {
                    Notification.requestPermission().then(function (permission) {
                        if (permission === "granted") {
                            new Notification("Bonjour le monde !");
                        } else {
                            console.error("Permission refusée par l'utilisateur");
                        }
                    });
                }
            },

            /**
             * Callback exécuté si l'enregistrement échoue
             * @param {Error} error
             */
            function onServiceWorkerFailed(error) {
                console.error("Erreur lors de l'enregistrement du service worker :", error);
            }
        );
    } else {
        console.log("Service worker non supporté");
    }
}

/**
 * Fonction principale appelée au chargement de la page
 */
addEventListener("load", initServiceWorkerAndNotifications);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
