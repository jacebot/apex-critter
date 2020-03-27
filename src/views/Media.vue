<template>
  <div class="media-view">
    <Hero></Hero>

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary">
              <p class="title">I produce music...</p>
              <p class="subtitle">and sometimes it sounds great.</p>
              <small>*An older track... but still checks out.</small>
              <iframe width="100%"
                      height="166"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/269266531&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
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

<style>
</style>
