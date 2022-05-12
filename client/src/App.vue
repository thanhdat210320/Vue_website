<template>
<Header />
  <router-view></router-view>
  <Footer />
</template>

<script>

import Footer from "./share/Footer.vue";
import Header from "./share/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
