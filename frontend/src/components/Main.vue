<template lang="html">

  <div class="">

    <el-container>

      <el-container>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
        <el-footer class="footer">
        </el-footer>
      </el-container>
    </el-container>
  </div>

</template>

<script>

import NotFound from './NotFound.vue'
import  HelloWorld from './HelloWorld.vue'

export default {
  name: 'Main',

  components: {
    'not-found': NotFound,
  }
}
</script>

<style lang="css">



.main{
  height: calc(100vh - 120px);
}
</style>
