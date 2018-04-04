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
        {{ message}}
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
import mqtt from 'mqtt'

export default {
  name: "Dashboard",

  components: {
    'clock': Clock
  },

  data() {
      return {
        message: 'Hello'
      }
  },

  created() {
    this.client = mqtt.connect('mqtt://10.0.0.12:1884');

    this.client.on('connect', function(){
      alert('Hello');
      this.client.subscribe('hello');
    })

    this.client.on('message', function(topic, msg){
      this.message = message.toString()
    })
  }
}
</script>

<style lang="scss" scoped>

#grid{
  display: grid;
  background-color: black;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 20% 25% 25% 30%;
  height: calc(100vh - 4px);
  //grid-gap: 5px;
  width: calc(100% - 4px);
  border: 2px solid white;


}
.box{
  background: black; //radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
  color: #FFFFFF;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
  font-size: 20px;
}

#a {
    grid-column: span 4;
    grid-row: span 3;

  }

  #f{
    grid-column: span 2;
    text-align: center;
  }

</style>
