<template>
  <div class="media-view">
    <Hero></Hero>

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">My torrid past with music...</p>
              <p class="subtitle">and then some.</p>
              <p>Starting in the 1990's this article sums up a lot of the Bay Area life
                for a young raver, budding artist and DJ.
              </p>
              <p>
                <a href="https://djtechtools.com/2013/12/19/history-of-the-rave-scene-how-djs-built-modern-dance-music/"
                   target='_blank'>
                  `Dj Tech Tools - History Of The Right To Rave</a>
              </p>
            </article>
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success">
          <div class="content">
            <p class="title">Other source's...</p>
            <p class="subtitle">to enjoy more of my music.</p>
            <div class="content">
              <!-- Content -->
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero/Hero.vue';

export default {
  name: 'media',
  components: {
    Hero
  }
};
</script>
