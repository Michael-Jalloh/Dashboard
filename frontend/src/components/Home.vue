<template lang="html">
  <div class="main">
    <el-container>
      <app-hello></app-hello>


    </el-container>
  </div>
</template>

<script>

import HelloWorld from './HelloWorld.vue'

export default {

  components: {
    'app-hello':HelloWorld
  }

}
</script>

<style lang="css" scoped>
  .main {
    margin: 20px;
    border: 2px solid;
  }
</style>
