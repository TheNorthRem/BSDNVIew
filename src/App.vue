<template>
  <div id="app">
    <!-- <router-view /> -->
    <bsHeader />
    <router-view />
  </div>
</template>

<script>
import bsHome from './views/bsHome.vue'
import login from '@/components/login.vue'
import bsHeader from '@/components/bsHeader.vue'

export default {
  name: 'App',
  components: {
    bsHeader,
    // Login,
    bsHome
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
