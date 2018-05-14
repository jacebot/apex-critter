<template>
  <footer class="footer" v-bind:class="{ lander: !pathCheck }">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Site hacked togther by: </strong><a href="https://roguecs.com">R0Gu3Cs</a> ©2018
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterNav",
  props: {
    pathCheck: false
  }
}
</script>

<style scoped lang="less">
  .footer {
    height: 60px;
    padding: 1em;
    position: sticky;

    &.lander {
      background-color: transparent;
      margin-top: -60px;
    }

    a {
      text-shadow: 2px 0px 3px #d3d3d3;
    }
  }
</style>
