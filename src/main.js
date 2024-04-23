import { createApp } from "vue";
import App from "./App.vue";

createApp(App)
  .use(router) // Utiliser Vue Router dans l'application
  .mount("#app");
