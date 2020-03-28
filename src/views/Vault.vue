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
                  <iframe width="100%"
                          height="166"
                          scrolling="no"
                          frameborder="no"
                          allow="autoplay"
                          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/198037406&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                </li>
                <li>
                  <iframe width="100%"
                          height="166"
                          scrolling="no"
                          frameborder="no"
                          allow="autoplay"
                          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252296855&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                </li>
                <li>
                  More free downloads at...
                  <a href="https://soundcloud.com/vylent-hands">Soundcloud</a>
                </li>
              </ul>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Mixes that I have done</p>
              <p class="subtitle">...with various genres including house, techno and more. </p>
              <iframe width="100%"
                      height="120"
                      src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FHawthorne_Music%2Fhawthorne-live-at-hard-hat-las-vegas-nv%2F"
                      frameborder="0"></iframe>
              <hr />
              <iframe width="100%"
                      height="120"
                      src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Ffox-innabox%2Fhazy-vegas-the-chase-081217%2F"
                      frameborder="0"></iframe>
              <hr />
              <iframe width="100%"
                      height="166"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/281081824&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
              <ul>
                <li>
                  <p>More mixes on...</p>
                  <a href="https://www.mixcloud.com/Hawthorne_Music/"
                     target="_blank">Mixcloud</a>
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
import Hero from '@/components/Hero/Hero.vue';

export default {
  name: 'vault',
  components: {
    Hero
  }
};
</script>
