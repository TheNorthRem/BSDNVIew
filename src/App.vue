<template>
  <div id="app">
    <bsHome />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import bsHome from './views/bsHome.vue'
import login from '@/components/login.vue'

export default {
  name: 'App',
  components: {
    // bsHeader,
    // Login,
    bsHome
  }
}
</script>

<style>
body{
      width:100%;
        margin: 0;
    }
</style>
