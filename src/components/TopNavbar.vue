<template>
    <nav class="navbar is-fixed-top is-warning">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../assets/ac-logo-web.png" alt="Apex Critter small logo">
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">

          <router-link to="/home" class="navbar-item">Home</router-link>
          <router-link to="/media" class="navbar-item">Media</router-link>
          <router-link to="/vault" class="navbar-item">Vault</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>

        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://apexcritter.com" target="_blank" href="https://twitter.com/intent/tweet?text=Apex Critter Website&amp;hashtags=apex_critter&amp;url=http://apexcritter.com">
                  <span class="icon">
                    <i class="ion-iconic ion-logo-twitter"></i>
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" target="_blank" href="https://bandcamp.com">
                  <span class="icon">
                    <img src="../assets/bandcamp-button-circle-black-64.png"/>
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
export default {
  name: "TopNavbar"
}
</script>

<style>

</style>
