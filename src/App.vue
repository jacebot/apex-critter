<template>
  <div id="app">
    <TopNavbar v-if="isNotRoot"></TopNavbar>
    <vue-page-transition name="overlay-up-full">
      <router-view />
    </vue-page-transition>
    <FooterNav :pathCheck="isNotRoot"></FooterNav>
  </div>
</template>

<script>
import TopNavbar from '@/components/TopNavbar.vue';
import FooterNav from '@/components/FooterNav.vue';

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
};
</script>


<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
