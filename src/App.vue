<template>
  <div id="app">
    <search />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import bsHome from './views/bsHome.vue'
import search from './views/search.vue'
import login from '@/components/login.vue'

export default {
  name: 'App',
  components: {
    // bsHeader,
    // Login,
    bsHome,
    search
  }
}
</script>

<style>
body{
      width:100%;
        margin: 0;
    }
</style>
