<template>
  <div class="">
    <Header />
    <Navbar />
    <router-view></router-view>
    <!-- <HomeAdmin /> -->
  </div>
</template>

<script>
// import HomeAdmin from "./components/HomeAdmin.vue";
import Header from "./share/Header.vue";
import Navbar from "./share/Navbar.vue";
export default {
  name: "App",
  components: {
    Header,
    Navbar,
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
  margin-top: 60px;
}
.wrapper {
  margin-left: 15.4%;
  width: 85%;
  margin-top: 17px;
}
</style>
