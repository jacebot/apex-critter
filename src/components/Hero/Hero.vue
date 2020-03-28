<template>
  <section class="hero is-black is-large">
    <audio id="player"
           autostart="false"
           preload="none"></audio>
    <canvas id="c"></canvas>
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{title}}
        </h1>
        <h2 class="subtitle">
          {{subTitle}}
        </h2>
      </div>
      <div class="button is-light is-outlined p-4"
           v-on:click="togglePlayPause"
           v-show="showPlayButton">
        <PlayIcon />
        <span>Click me to play some noise.</span>
      </div>
    </div>
  </section>
</template>

<script>
import PlayIcon from 'vue-ionicons/dist/ios-play.vue';
import runHexBackground from './scripts/runHex';
import runVisualizerBackground from './scripts/runVisualizer';
import runCubeBackground from './scripts/runCube';
import runMathLineBackground from './scripts/runLine';

export default {
  name: 'Hero',
  data() {
    return {
      showPlayButton: false
    };
  },
  props: {
    title: '',
    subTitle: ''
  },
  components: {
    PlayIcon
  },
  computed: {
    pathName() {
      return this.$route.path;
    }
  },
  methods: {
    togglePlayPause() {
      const player = document.getElementsByTagName('audio');
      if (!player[0].paused && player[0].currentTime > 0 && !player[0].ended) {
        player[0].pause();
      } else {
        runVisualizerBackground();
        player[0].play();
      }
    }
  },
  mounted() {
    let path = this.pathName;

    switch (path) {
      case '/home':
        runHexBackground();
        break;
      case '/media':
        // Show the play / pause button
        this.showPlayButton = true;
        break;
      case '/vault':
        runCubeBackground();
        break;
      case '/about':
        runMathLineBackground();
        break;
      default:
        break;
    }
  },
  destroyed() {
    this.showPlayButton = false;
  }
};
</script>

<style lang="less">
@media screen and (min-width: 320px), print {
  .hero.is-large .hero-body {
    padding-bottom: 9rem;
    padding-top: 9rem;
  }
}

h1.title {
  font-size: 3em !important;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
