<template>
  <div class="page404">
    <div class="container">
      <div class="columns">
        <div class="column is-4" />
        <div class="column is-4">
          <div class="box-shadow">
            <img src="../assets/404.png"
                 class="reaper"
                 alt="">
          </div>
        </div>
        <div class="column is-4" />
      </div>
      <div class="columns">
        <div class="column is-2" />
        <div class="column is-8 message-error">
          <p>It's a sad thing that</p>
          <p>your adventures have</p>
          <p>ended here!!</p>
          <p>&nbsp;</p>
        </div>
        <div class="column is-2" />
      </div>
      <div class="columns">
        <div class="column is-12 cursor-pointer" v-on:click='reroute'>
          Click Here to go home...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  methods: {
    reroute: function() {
      this.$router.push('/home')   
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');

.page404 {
  background-color: #000;
  padding-top: 100px;
  height: 100vh;
  font-family: 'Press Start 2P', monospace;
  font-size: 36px;
  font-weight: 700;
  color: #fff;
}

.cursor-pointer {
  cursor: pointer;
}

.reaper {
  width: 97%;
  position: relative;
  top: 4px;
  left: 2px;
}

.box-shadow {
  /*  -webkit-box-shadow: 0px 0px 3px 24px rgba(232,207,156,0.77);
-moz-box-shadow: 0px 0px 3px 24px rgba(232,207,156,0.77);
box-shadow: 0px 0px 3px 24px rgba(232,207,156,0.77); */
  background: url('../assets/404-pattern.png') repeat rgba(232, 207, 156, 0.77);
  padding: 12px;
}

.message-error {
  background-color: #fadaaf;
  color: #000;
  text-transform: uppercase;
  word-spacing: 6px;
}

.message-error p {
  text-align: left;
  border-top: 1px dashed #000;
  border-bottom: 1px dashed #000;
  line-height: 66px;
  height: 62px;
}
</style>
