import {StrictMode, useEffect} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'

registerSW({ immediate: true })

addEventListener("load", () => {
    if ("serviceWorker" in navigator) {



        navigator.serviceWorker.register("/sw.js").then(
            (registration) => {
                console.log("Service worker registration succeeded:", registration);
                if (!("Notification" in window)) {
                    console.error("Ce navigateur ne supporte pas les notifications de bureau");
                } else if (Notification.permission === "granted") {
                    console.log("Permission déjà accordée");
                  const notification = new Notification("Bonjour !");
                } else if (Notification.permission !== "denied") {
                    // Demande la permission
                    const permission = Notification.requestPermission();
                    if (permission === "granted") {
                        const notification = new Notification("Hi there!");
                    } else {
                        console.error("Permission refusée par l’utilisateur");
                    }
                }
            },
            /*catch*/ (error) => {
                console.log("Service worker registration failed:", error);
            },
        );
    } else {
        console.log("Service workers are not supported.");
    }
})



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
