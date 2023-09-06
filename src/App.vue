<template>
  <div id="app">
    
    <!-- <router-view /> -->
    <profile />
  </div>
</template>

<script>
import bsHome from '@/views/bsHome.vue'
import profile from '@/views/profile.vue'


export default {
  name: 'App',
  components: {
    bsHome,
    profile
  }
}
</script>

<style>
body{
      width:100%;
        margin: 0;
        /* background: #f1f4fa; */
        background:#FFFEFC;
    }
</style>
