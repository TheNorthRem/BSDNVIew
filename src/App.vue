<template>
  <div id="app">
    <bsHeader />
    <router-view />
  </div>
</template>

<script>
import bsHeader from './components/bsHeader.vue'
import login from '@/components/login.vue'

export default {
  name: 'App',
  components: {
    bsHeader,
    login
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
body{
        margin: 0;
    }
</style>
