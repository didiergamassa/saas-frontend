<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/apegg">APEGG</router-link></li>
        <li><router-link to="/solutions">Solutions</router-link></li>
        <li><router-link to="/mission">Notre Mission</router-link></li>
        <li><router-link to="/engagement">Notre Engagement</router-link></li>
        <li><router-link to="/vision">Notre Vision</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  background-color: #333;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  display: inline;
}

nav ul li a {
  display: inline-block;
  padding: 10px 20px;
  color: white;
  text-decoration: none;
}

nav ul li a:hover {
  background-color: #555;
}
</style>
