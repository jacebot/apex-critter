<template>
  <div id="app">
    <TopNavbar v-if="isNotRoot"></TopNavbar>

    <router-view/>

    <FooterNav></FooterNav>
  </div>
</template>

<script>
import TopNavbar from "@/components/TopNavbar.vue";
import FooterNav from "@/components/FooterNav.vue";

export default {
    computed: {
      isNotRoot() {
        if (this.$route.path !== '/') {
          return true;
        }
      }
    },
    components: {
    TopNavbar,
    FooterNav
  }
}
</script>


<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  a {
    color: #42b983;
  }
}
</style>
