<template>
  <nav class="navbar is-fixed-top is-warning">
    <div class="navbar-brand">
      <a class="navbar-item"
         href="/">
        <img src="../assets/ac-logo-web.png"
             alt="Apex Critter small logo">
      </a>
      <div class="navbar-burger burger"
           v-on:click="showMenu = !showMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarTop"
         class="navbar-menu" v-bind:class="{ 'is-active': showMenu }">
      <div class="navbar-start">

        <router-link to="/home"
                     class="navbar-item">Home</router-link>
        <router-link to="/media"
                     class="navbar-item">Media</router-link>
        <router-link to="/vault"
                     class="navbar-item">Vault</router-link>

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button"
                 data-social-network="Twitter"
                 data-social-action="tweet"
                 data-social-target="http://apexcritter.com"
                 target="_blank"
                 href="https://twitter.com/intent/tweet?text=Apex Critter Website&amp;hashtags=apex_critter&amp;url=http://apexcritter.com">
                <span class="icon">
                  <LogoTwitterIcon />
                </span>
                <span>Tweet</span>
              </a>
            </p>
            <p class="control">
              <a class="button is-primary"
                 target="_blank"
                 href="https://apexcritter.bandcamp.com">
                <span class="icon">
                  <img src="../assets/bandcamp-logo.png" />
                </span>
                <span>Shop</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LogoTwitterIcon from 'vue-ionicons/dist/logo-twitter.vue';
export default {
  name: 'TopNavbar',
  components: {
    LogoTwitterIcon
  },
  data() {
    return {
      showMenu: false
    };
  },
  watch: {
    '$route' () {
      this.showMenu = false
    }
  }
};
</script>
