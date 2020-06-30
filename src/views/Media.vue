<template>
  <div class="media-view">
    <Hero></Hero>

    <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <figure class="image is-16by9">
              <img class="rounded" src="../assets/the-eclipse-coventry.jpg" />
            </figure>
            <article class="tile is-child notification is-primary">
              <p class="title">My torrid past with music...</p>
              <p class="subtitle">and then some.</p>
              <p>
                Starting in the 1990's this article sums up a lot of the Bay
                Area life for a young raver, budding artist and DJ.
              </p>
              <p>
                <a
                  href="https://djtechtools.com/2013/12/19/history-of-the-rave-scene-how-djs-built-modern-dance-music/"
                  target="_blank"
                >
                  `Dj Tech Tools - History Of The Right To Rave</a
                >
              </p>
              <p>
                Aside from that, I spent a lot of time being a West coast nomad.
                Bouncing from town to town, and playing random parties and
                event.
              </p>
              <p>
                Later on in my youth, I would travel to Germany for the summer
                and play in a family friends rock night club where I manned the
                decks for hundreds of head bangers.
              </p>
              <p>
                Entering my 20's I organized a few events including one that was
                hosted at the Steve Miller ranch in a secluded place in Oregon.
              </p>
            </article>
          </div>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-success text-dark">
          <router-link to="/media">
            <figure class="image is-4by3 rounded">
              <img class="rounded" src="../assets/source.gif" />
            </figure>
          </router-link>
          <p class="title">Other source's...</p>
          <p class="subtitle">to enjoy more of my music.</p>
          <ul>
            <li>
              <a href="#" target="_blank">
                <h3 style="font-size: 1.5rem; margin-bottom: 15px;">
                  Bandcamp
                </h3>
              </a>
            </li>
            <li>
              <a
                href="https://www.internet-radio.com/search/?radio=richidance"
                target="_blank"
                >Richidancefm (Hazy Vegas - Every Satuday @ 2pm PST)</a
              >
            </li>
            <li>
              <a href="https://soundcloud.com/vylent-hands" target="_blank"
                >Soundcloud</a
              >
            </li>
            <li>
              <a
                href="https://www.mixcloud.com/Hawthorne_Music/"
                target="_blank"
                >Mixcloud</a
              >
            </li>
            <li>
              YouTube (Coming Soon!)
            </li>
          </ul>
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

<style lang="less" scoped>
.is-success.text-dark {
  color: #000000;

  .title {
    margin-top: 12px;
  }
}
</style>
