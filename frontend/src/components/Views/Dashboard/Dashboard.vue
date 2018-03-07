<template>
  <div id="grid">
    <div class="box" id="a">
    </div>
    <div class="box" id="b">
      <clock></clock>
    </div>
    <div class="box" id="c">
      <p>c</p>
    </div>
    <div class="box" id="d">
      <p>d</p>
    </div>
    <div class="box" id="e">
      <p>e</p>
    </div>
    <div class="box" id="f">
      <img src="/home/assets/pic1.jpg" alt="">
      <p>f</p>
    </div>
    <div class="box" id="g">
      <p>g</p>
    </div>
    <div class="box" id="i">
      <p>i</p>
    </div>

  </div>
</template>

<script>
import Clock from '../../Clock'

export default {
  name: "Dashboard",

  components: {
    'clock': Clock
  },

  data() {
      return {

      }
  }
}
</script>

<style lang="scss" scoped>

#grid{
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 25% 25% 30%;
  height: calc(100vh - 15px);
  grid-gap: 5px;
  width: calc(100% - 20px);


}
.box{
  background-color: crimson;
}

#a {
    grid-column: span 4;
    grid-row: span 3;
  }

  #f{
    grid-column: span 2;
  }

</style>
