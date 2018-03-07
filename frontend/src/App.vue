<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

  data (){
    return {
      active: false
    }
  },

  components: {

  },

  methods: {

  }
}
</script>

<style lang="scss">
@import 'variable.scss';
@import 'mixins.scss';
@import 'main.scss';

body {
  margin: 0;
  padding: 0;
}

header, footer {
  min-height: 50px;
  background-color: #343A40;
  border-color: #080808;
  color: white;
  padding: 0 20px;
}

header {
  justify-content: space-between;

  ul{
    margin: 0;
    display: flex;

    @include until($large-tablet){
      width: 250px;
      max-width: 0;
      height: 60vh;
      position: absolute;
      top: 49px;
      left: -21px;
      background-color: #222;
      flex-direction: column;
      padding:10px 0 0;
      transition: .2s all linear;
      pointer-events: none;
      opacity: 0;
      //display: none;
    };

    li{
        margin: 0 20px;
        list-style: none;
    }
  }
}
 ul.active {
   pointer-events: inherit;
   opacity: 1;
   max-width: 50%;
   transition: .2s max-width opacity ease-in-out;
 }
nav{
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  position: relative;
  max-height: 35px;


}

p{
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
}


.main-content {
  height: calc(100vh - 100px);
  overflow-y: auto;
  padding: 0;
}

</style>
