<template>
  <div class="vault">
    <Hero></Hero>
    
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-12">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-warning">
              <p class="title">Music I have produced</p>
              <p class="subtitle">...through tireless hours and occasionally in no time at all.</p>
               <ul>
                <li>
                  <a href="#">Link to a track</a>
                </li>
                <li>
                  <a href="#">Link to a track</a>
                </li>
                <li>
                  <a href="#">Link to a track</a>
                </li>
              </ul>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Mixes that I have done</p>
              <p class="subtitle">...with various genres including house, techno and more. </p>
              <ul>
                <li>
                  <a href="#">Link to a mix</a>
                </li>
                <li>
                  <a href="#">Link to a mix</a>
                </li>
                <li>
                  <a href="#">Link to a mix</a>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero/Hero.vue";

export default {
  name: "vault",
  components: {
    Hero
  }

}
</script>
