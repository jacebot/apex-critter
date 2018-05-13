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
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                  <span class="icon">
                    <i class="fab fa-twitter"></i>
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                  <span class="icon">
                    <i class="fas fa-download"></i>
                  </span>
                  <span>Download</span>
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
