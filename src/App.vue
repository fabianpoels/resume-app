<template>
  <div id="app">
    <nav>
      <router-link :to="{name: 'PersonalInfo'}"><span class="navDecoration">&lt;</span>Fabian Poels<span class="navDecoration">&gt;</span></router-link>
      <router-link :to="{name: 'Skills'}"><span class="navDecoration">&lt;</span>Skills<span class="navDecoration">&gt;</span></router-link>
      <router-link :to="{name: 'WorkExperience'}"><span class="navDecoration">&lt;</span>Experience<span class="navDecoration">&gt;</span></router-link>
      <router-link :to="{name: 'Education'}"><span class="navDecoration">&lt;</span>Education<span class="navDecoration">&gt;</span></router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
div#app {
  width: 100%;
  font-family: 'Titillium Web', sans-serif;
  /*font-family: 'Lato', sans-serif;*/
}

div#spinner {
  width: 10px;
  margin: auto;
  margin-top: 50px;
}

nav {
  text-align: center;
  margin-top: 30px;
  font-size: 125%;
  border-bottom: 1px solid #bbb;
  padding-bottom: 5px;
}

nav a {
  color: #000;
  text-decoration: none;
  padding: 0 30px;
}

nav a span.navDecoration {
  color: #fff;
}

nav a:hover {
  color: #f2511b;
}

nav a:hover span.navDecoration {
  color: #f2511b;
}

nav a.router-link-active {
  color: #f2511b;
}

</style>
