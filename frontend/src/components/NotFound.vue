<template lang="html">
  <div class="not-found">
    <h1>404 - Not Found</h1>
    <h3>The page your are looking for is not found.</h3>
  </div>
</template>

<script>

import HelloWorld from './HelloWorld.vue'
export default {

  components: {
    'app-hello': HelloWorld
  }
}
</script>

<style lang="css">

.not-found{
  padding: 40px;
}
</style>
