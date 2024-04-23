import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js"; // Chemin vers ton fichier router/index.js

createApp(App)
  .use(router) // Utiliser Vue Router dans l'application
  .mount("#app");
