<template>
  <div class="hello">

    <router-link to="/home" >
      <img src="../assets/apex-critter-AC-web.png"/>

      <h1 class="is-size-4">{{ msg }}</h1>

    </router-link>
  </div>
</template>

<script>
export default {
  name: "HelloFuckingUglyWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  height: 100vh;
  color: #fff;
  background: linear-gradient(0deg, #6c69d1, #942193, #32b247, #29a0e3);
  background-size: 800% 800%;

  -webkit-animation: apexGrade 30s ease infinite;
  -moz-animation: apexGrade 30s ease infinite;
  animation: apexGrade 30s ease infinite;

  @-webkit-keyframes apexGrade {
      0%{background-position:11% 0%}
      50%{background-position:90% 100%}
      100%{background-position:11% 0%}
  }
  @-moz-keyframes apexGrade {
      0%{background-position:11% 0%}
      50%{background-position:90% 100%}
      100%{background-position:11% 0%}
  }
  @keyframes apexGrade { 
      0%{background-position:11% 0%}
      50%{background-position:90% 100%}
      100%{background-position:11% 0%}
  }

  h1 {
    text-shadow: 2px 0px 3px #d3d3d3;
  }
}
</style>
