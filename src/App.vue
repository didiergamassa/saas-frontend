<template>
  <div id="app">
    <nav>
      <ul class="nav-list">
        <router-link to="/apegg" class="nav-link">APEGG</router-link>
        <router-link to="/solutions" class="nav-link">Solutions</router-link>
        <router-link to="/mission" class="nav-link">Mission</router-link>
        <router-link to="/engagement" class="nav-link"> Engagement</router-link>
        <router-link to="/vision" class="nav-link">Vision</router-link>
      </ul>
    </nav>
    <router-view />
    <Onglets />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<script>
import Onglets from './components/Onglets.vue';

export default {
  components: {
    Onglets,
  },
  // Autres options
}
</script>

<style>
nav {
  background-color: #0a3d62; /* Fond de couleur bleu foncé */
}

.nav-list {
  display: flex;
  justify-content: space-between; /* Centrer les onglets horizontalement */
  align-items: center; /* Centrer les onglets verticalement */
  padding: 0;
}

.nav-link {
  padding: 20px 20px;
  color: white;
  text-decoration: none;
  font-size: 30px; /* Augmentation de la taille des lettres */
}

.nav-link:hover {
  background-color: #555;
}
</style>
