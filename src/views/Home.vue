<template>
  <div class="home">

    <Hero title='∆PEX ÇRITTER'
          subTitle="Artist  ||  Dj  ||  Producer"></Hero>

    <div class="columns">
      <div class="column is-12">
        <div class="tile is-ancestor main-content">
          <div class="tile is-vertical">
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
                <router-link to="/vault"><p class="subtitle mt-3">Click here to download more music.</p></router-link>
                </article>
                <article class="tile is-child notification is-danger">
                  <p class="title">Links...</p>
                  <p class="subtitle">to places on the internet I can be found.</p>
                  <ul>
                    <li>
                      <a href="https://apexcritter.bandcamp.com" target="_blank">
                        <h3 style="font-size: 1.5rem; margin-bottom: 15px;">Bandcamp</h3>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.internet-radio.com/search/?radio=richidance" target="_blank">Richidancefm (Hazy Vegas - Every Satuday @ 2pm PST)</a>
                    </li>
                    <li>
                      <a href="https://soundcloud.com/vylent-hands" target="_blank">Soundcloud</a>
                    </li>
                    <li>
                      <a href="https://www.mixcloud.com/Hawthorne_Music/" target="_blank">Mixcloud</a>
                    </li>
                    <li>
                      YouTube (Coming Soon!)
                    </li>
                  </ul>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-info">
                  <p class="title">Dj'ing...</p>
                  <p class="subtitle">for a long time.</p>
                  <router-link to="/media">
                    <figure class="image is-4by3 rounded">
                      <img class='rounded'
                           src="../assets/dj-back.jpg">
                    </figure>
                  </router-link>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/Hero/Hero.vue';

export default {
  name: 'home',
  components: {
    Hero
  }
};
</script>

<style lang="less">

.main-content {
  margin: 0px !important;
}
</style>
